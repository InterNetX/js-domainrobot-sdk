/* global describe, it, beforeEach, afterEach, require, Buffer */

// Real HTTP integration tests for DomainService (NO axios-mock-adapter).
// Complements DomainRobotService.integration.test.js by exercising the axios
// 1.x request/response flow through a second, more varied service:
//   - PUT with a verb-suffixed path (_renew) + JSON body
//   - GET with a dotted domain name in the path
//   - POST _search whose manually built `?keys[]=...` query string must reach
//     the wire intact (proves the axios 1.x params-serialization change does
//     NOT affect this SDK, which builds URLs itself instead of using `params`)
//   - POST with no request body
//
// A local HTTP server captures the incoming request and replies 200 + JSON.

const http = require("http");
const Domainrobot = require("../../src/Domainrobot");
const ApiFactory = require("../../src/lib/Factory");
const domainrobot = require("../../src/swagger/domainrobot.json");
const expect = require("chai").expect;

const Backend = new ApiFactory(domainrobot);
const DomainRobotModels = Backend.models;

describe("DomainService HTTP (integration)", () => {
    let server;
    let port;
    let lastRequest;

    beforeEach((done) => {
        lastRequest = null;
        server = http.createServer((req, res) => {
            const chunks = [];
            req.on("data", (c) => chunks.push(c));
            req.on("end", () => {
                lastRequest = {
                    method: req.method,
                    url: req.url,
                    headers: req.headers,
                    body: Buffer.concat(chunks).toString("utf8"),
                };
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(
                    JSON.stringify({
                        stid: "domain-integration",
                        status: { code: "S0000", type: "SUCCESS" },
                    })
                );
            });
        });
        server.listen(0, "127.0.0.1", () => {
            port = server.address().port;
            done();
        });
    });

    afterEach((done) => {
        server.close(done);
    });

    function makeClient() {
        return new Domainrobot({
            url: `http://127.0.0.1:${port}`,
            auth: { user: "theuser", password: "thepass", context: "9" },
        });
    }

    it("sends a PUT renew with a verb-suffixed path and JSON body", async () => {
        const domain = new DomainRobotModels.Domain({ name: "example.com" });

        const result = await makeClient().domain().renew(domain);

        expect(lastRequest.method).to.be.equal("PUT");
        expect(lastRequest.url).to.be.equal("/domain/example.com/_renew");
        expect(lastRequest.headers["content-type"]).to.match(
            /^application\/json/
        );

        let parsed;
        expect(() => {
            parsed = JSON.parse(lastRequest.body);
        }).to.not.throw();
        expect(parsed.name).to.be.equal("example.com");

        expect(result.status).to.be.equal(200);
    });

    it("sends a GET info with a dotted domain name in the path", async () => {
        const result = await makeClient().domain().info("example.com");

        expect(lastRequest.method).to.be.equal("GET");
        expect(lastRequest.url).to.be.equal("/domain/example.com");
        expect(result.status).to.be.equal(200);
        expect(result.result.status.type).to.be.equal("SUCCESS");
    });

    it("keeps the manually built keys[] query string intact on the wire", async () => {
        const query = new DomainRobotModels.Query({
            filters: [
                { key: "tld", value: "com", operator: "EQUAL" },
            ],
        });
        const keys = ["tld", "status"];

        const result = await makeClient().domain().list(query, keys);

        expect(lastRequest.method).to.be.equal("POST");

        // encodeURI leaves [ ] ? & = untouched; the bracket notation must not
        // be mangled by axios' params serialization (which is not used here).
        const url = decodeURIComponent(lastRequest.url);
        expect(url).to.contain("/domain/_search?");
        expect(url).to.contain("keys[]=tld");
        expect(url).to.contain("keys[]=status");

        expect(result.status).to.be.equal(200);
    });

    it("sends a POST with no request body (authInfo1Create)", async () => {
        const result = await makeClient()
            .domain()
            .authInfo1Create("example.com");

        expect(lastRequest.method).to.be.equal("POST");
        expect(lastRequest.url).to.be.equal("/domain/example.com/_authinfo1");
        // No payload is passed, so sendRequest falls back to its `data = null`
        // default. With the global application/json Content-Type axios
        // serializes that to the JSON literal "null" (same behaviour in 0.x and
        // 1.x - not an upgrade regression).
        expect(lastRequest.body).to.be.equal("null");

        expect(result.status).to.be.equal(200);
    });
});
