const request = require("supertest");
const app = require("../../app.js");

describe("/subscribe/mailchimp/", () => {
  it("returns 404 when no e-mail has been provided in the body", async (done) => {
    const res = await request(app)
      .post("/subscribe/mailchimp")
      .set("Origin", "http://localhost:3000");

    expect(res.status).toBe(400);
    expect(res.body).toEqual(
      expect.objectContaining({
        message: "Failed, no email has been provided.",
      })
    );

    done();
  });

  it("when fetch rejects it returns 500", async (done) => {
    fetch.mockReject(new Error("fake error message"));
    const res = await request(app)
      .post("/subscribe/mailchimp")
      .send({
        EMAIL: "test@gmail.com",
      })
      .set("Origin", "http://localhost:3000");

    expect(res.status).toBe(500);

    done();
  });

  it("when subscriber exists it returns 422", async (done) => {
    fetch.mockResponse(
      JSON.stringify({
        errors: [{ error_code: "ERROR_CONTACT_EXISTS" }],
      })
    );
    const res = await request(app)
      .post("/subscribe/mailchimp")
      .send({
        EMAIL: "test@gmail.com",
      })
      .set("Origin", "http://localhost:3000");

    expect(res.status).toBe(422);

    done();
  });

  it("subscribes a user", async (done) => {
    fetch.mockResponse(JSON.stringify(''));
    const res = await request(app)
      .post("/subscribe/mailchimp")
      .send({
        EMAIL: "test@gmail.com",
      })
      .set("Origin", "http://localhost:3000");

    expect(res.status).toBe(200);

    done();
  });
});
