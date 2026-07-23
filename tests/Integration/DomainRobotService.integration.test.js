/* global describe, it, beforeEach, afterEach, require, Buffer */

// Real HTTP integration tests (NO axios-mock-adapter).
// These exercise axios 1.x behaviour that a mock-adapter based suite cannot
// reach, because the mock intercepts BELOW axios' real serialization/parsing:
//   - strict JSON parsing of the response body
//   - response headers exposed as an AxiosHeaders object
//   - error handling: a non-2xx response throws and is mapped to
//     DomainRobotException (axios 1.x consistently throws)
//   - connection errors without a response are rethrown untouched
//   - Basic auth + custom headers are actually put on the wire
//   - JSON request bodies are serialized with application/json
//
// A local HTTP server captures the incoming request and replies with a
// per-test configurable responder.

const http = require("http");
const Domainrobot = require("../../src/Domainrobot");
const DomainRobotException = require("../../src/lib/DomainRobotException");
const ApiFactory = require("../../src/lib/Factory");
const domainrobot = require("../../src/swagger/domainrobot.json");
const expect = require("chai").expect;

const Backend = new ApiFactory(domainrobot);
const DomainRobotModels = Backend.models;

describe("DomainRobotService HTTP (integration)", () => {
    let server;
    let port;
    let lastRequest;
    let responder;

    beforeEach((done) => {
        lastRequest = null;

        // default: 200 + a JSON body and a custom response header
        responder = (req, res) => {
            res.writeHead(200, {
                "Content-Type": "application/json",
                "X-Domainrobot-Stid": "stid-integration-123",
            });
            res.end(
                JSON.stringify({
                    stid: "stid-integration-123",
                    status: { code: "S0000", type: "SUCCESS" },
                })
            );
        };

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
                responder(req, res);
            });
        });
        server.listen(0, "127.0.0.1", () => {
            port = server.address().port;
            done();
        });
    });

    afterEach((done) => {
        if (server) {
            server.close(done);
        } else {
            done();
        }
    });

    function makeClient() {
        return new Domainrobot({
            url: `http://127.0.0.1:${port}`,
            auth: { user: "theuser", password: "thepass", context: "9" },
        });
    }

    it("puts basic auth + context header on the wire and parses the JSON response", async () => {
        const result = await makeClient().contact().info(42);

        // --- wire ---
        expect(lastRequest.method).to.be.equal("GET");
        expect(lastRequest.url).to.be.equal("/contact/42");

        const expectedAuth =
            "Basic " + Buffer.from("theuser:thepass").toString("base64");
        expect(lastRequest.headers["authorization"]).to.be.equal(expectedAuth);
        expect(lastRequest.headers["x-domainrobot-context"]).to.be.equal("9");

        // --- response: real JSON parsing by axios 1.x ---
        expect(result.status).to.be.equal(200);
        expect(result.result).to.be.an("object");
        expect(result.result.status.type).to.be.equal("SUCCESS");
    });

    it("exposes response headers (AxiosHeaders) via getHeaders()", async () => {
        const result = await makeClient().contact().info(1);

        const headers = result.getHeaders();
        expect(headers).to.not.be.equal(undefined);
        // axios 1.x normalizes response header names to lower case
        expect(headers["x-domainrobot-stid"]).to.be.equal(
            "stid-integration-123"
        );
    });

    it("serializes a model as an application/json request body", async () => {
        const contact = new DomainRobotModels.Contact({
            city: "Regensburg",
            country: "DE",
        });

        const result = await makeClient().contact().create(contact);

        expect(lastRequest.method).to.be.equal("POST");
        expect(lastRequest.url).to.be.equal("/contact");
        expect(lastRequest.headers["content-type"]).to.match(
            /^application\/json/
        );

        // The body must be valid JSON (axios 1.x serialized it) ...
        let parsed;
        expect(() => {
            parsed = JSON.parse(lastRequest.body);
        }).to.not.throw();
        expect(parsed).to.be.an("object");
        expect(lastRequest.body).to.contain("Regensburg");

        expect(result.status).to.be.equal(200);
    });

    it("throws DomainRobotException with status + body on a 4xx response", async () => {
        responder = (req, res) => {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(
                JSON.stringify({
                    status: { code: "EF02324", type: "ERROR" },
                    messages: ["Validation failed"],
                })
            );
        };

        let thrown;
        try {
            await makeClient().contact().info(1);
        } catch (e) {
            thrown = e;
        }

        expect(thrown, "an exception was thrown").to.not.be.equal(undefined);
        expect(thrown.type).to.be.equal("DomainRobotException");
        expect(thrown).to.be.an.instanceof(DomainRobotException);
        expect(thrown.status).to.be.equal(400);
        // the response body is mapped onto exception.error
        expect(thrown.error.status.type).to.be.equal("ERROR");
    });

    it("rethrows connection errors that carry no response", async () => {
        const client = makeClient();

        // Close the server so the connection is refused (no HTTP response at all).
        await new Promise((resolve) => server.close(resolve));
        server = null; // afterEach guard: already closed

        let thrown;
        try {
            await client.contact().info(1);
        } catch (e) {
            thrown = e;
        }

        expect(thrown, "an error was thrown").to.not.be.equal(undefined);
        // took the `error.response === undefined` branch -> raw error, not a
        // DomainRobotException
        expect(thrown.response).to.be.equal(undefined);
        expect(thrown.type).to.not.be.equal("DomainRobotException");
    });
});
