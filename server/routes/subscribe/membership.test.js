const request = require("supertest");
const app = require("../../app.js");
const nodeMailer = require("nodemailer");

const OLD_ENV = process.env;

jest.mock("nodemailer", () => ({
  createTransport: jest.fn(() => {}),
}));

const userMock = {
  MEMBERSHIP: "Individual",
  SALUTATION: "A salutation",
  FNAME: "John",
  LNAME: "Doe",
  COMPANY: "Foobar Inc.",
  TITLE: "A title",
  EMAIL: "test@gmail.com",
};

describe("/subscribe/membership", () => {
  afterAll(() => {
    process.env = OLD_ENV; // restore old env
  });

  it("requires mandatory process.env variables", async (done) => {
    const errMsg =
      "Required ENV variables are not set: [GOOGLE_USER, GOOGLE_REFRESH_TOKEN, GOOGLE_ACCESS_TOKEN, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, EMAIL_TO_1]";
    nodeMailer.createTransport.mockReturnValue({
      verify: jest.fn(),
      sendMail: jest.fn(),
      on: jest.fn(),
    });

    const res = await request(app)
      .post("/subscribe/membership")
      .set("Origin", "http://localhost:3000")
      .send(userMock);

    expect(res.status).toBe(500);
    expect(res.error.text).toContain(errMsg);

    expect(nodeMailer.createTransport().verify).not.toHaveBeenCalled();
    expect(nodeMailer.createTransport().sendMail).not.toHaveBeenCalled();

    done();
  });

  it("handles error when server is not ready to accept messages", async (done) => {
    const errMsg = "this thing failed..";
    process.env.GOOGLE_USER = "user";
    process.env.GOOGLE_REFRESH_TOKEN = "refresh";
    process.env.GOOGLE_ACCESS_TOKEN = "access";
    process.env.GOOGLE_CLIENT_ID = "client";
    process.env.GOOGLE_CLIENT_SECRET = "secret";
    process.env.EMAIL_TO_1 = "test@gmail.com";

    nodeMailer.createTransport.mockReturnValue({
      verify: jest.fn().mockRejectedValue(errMsg),
      sendMail: jest.fn(),
      on: jest.fn(),
    });

    const res = await request(app)
      .post("/subscribe/membership")
      .set("Origin", "http://localhost:3000")
      .send(userMock);

    expect(res.status).toBe(500);
    expect(res.error.text).toContain(errMsg);

    expect(nodeMailer.createTransport().verify).toHaveBeenCalled();
    expect(nodeMailer.createTransport().sendMail).not.toHaveBeenCalled();

    done();
  });

  it("succesfully sends an e-mail", async (done) => {
    process.env.GOOGLE_USER = "user";
    process.env.GOOGLE_REFRESH_TOKEN = "refresh";
    process.env.GOOGLE_ACCESS_TOKEN = "access";
    process.env.GOOGLE_CLIENT_ID = "client";
    process.env.GOOGLE_CLIENT_SECRET = "secret";
    process.env.EMAIL_TO_1 = "test@gmail.com";

    const info = {
      messageId: 1,
      accepted: [],
      rejected: [],
      response: "",
    };

    nodeMailer.createTransport.mockReturnValue({
      verify: jest.fn().mockResolvedValue(),
      sendMail: jest.fn((options, cb) => {
        return cb(null, info);
      }),
      on: jest.fn(),
    });

    const res = await request(app)
      .post("/subscribe/membership")
      .set("Origin", "http://localhost:3000")
      .send(userMock);

    expect(res.status).toBe(200);

    expect(nodeMailer.createTransport().verify).toHaveBeenCalled();
    expect(nodeMailer.createTransport().sendMail).toHaveBeenCalled();

    done();
  });
});
