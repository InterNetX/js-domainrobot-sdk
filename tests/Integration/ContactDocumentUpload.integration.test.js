/* global describe, it, beforeEach, afterEach, require */

// Real HTTP integration test (NO axios-mock-adapter).
// It spins up a local HTTP server so the request actually travels through
// axios' real adapter. This is the only way to verify axios 1.x behaviour
// that a mock-adapter based test cannot reach: that a FormData payload
// produces a genuine `multipart/form-data` body incl. boundary.

const http = require("http");
const Domainrobot = require("../../src/Domainrobot");
const expect = require("chai").expect;
// Use the `form-data` package instead of the global FormData so the test also
// runs on the CI Node version (Node 14 has no global FormData/Blob).
const FormData = require("form-data");

describe("ContactDocumentService upload (integration)", () => {
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
                        stid: "integration-test",
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

    it("sends a genuine multipart/form-data body with boundary", async () => {
        const baseUrl = `http://127.0.0.1:${port}`;

        const formData = new FormData();
        formData.append(
            "file",
            Buffer.from("dummy-id-document-content"),
            "idcard.pdf"
        );

        const domainRobot = new Domainrobot({
            url: baseUrl,
            auth: { user: "user", password: "password", context: "9" },
        });

        const result = await domainRobot
            .contactDocument()
            .upload(1, "idcard", formData);

        expect(result.status).to.be.equal(200);

        expect(lastRequest, "server received a request").to.not.be.equal(null);
        expect(lastRequest.method).to.be.equal("POST");
        expect(lastRequest.url).to.be.equal("/contact/1/document/idcard");

        // The key axios 1.x assertion: the wire Content-Type must be
        // multipart/form-data WITH a boundary - not the global application/json
        // default set in the DomainRobotService constructor.
        const contentType = lastRequest.headers["content-type"];
        expect(contentType, "Content-Type header").to.match(
            /^multipart\/form-data; boundary=/
        );

        // The boundary from the header must actually delimit the body, i.e.
        // axios produced a real multipart body from the FormData payload.
        const boundary = contentType.split("boundary=")[1];
        expect(lastRequest.body).to.contain(boundary);
        expect(lastRequest.body).to.contain("idcard.pdf");
        expect(lastRequest.body).to.contain("dummy-id-document-content");
    });
});
