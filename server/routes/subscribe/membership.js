const express = require("express");
const router = express.Router();
const nodeMailer = require("nodemailer");
const { requiredEnv } = require("../../lib/requiredEnv");

router.post("/", (req, res) => {
  requiredEnv(
    [
      "GOOGLE_USER",
      "GOOGLE_REFRESH_TOKEN",
      "GOOGLE_ACCESS_TOKEN",
      "GOOGLE_CLIENT_ID",
      "GOOGLE_CLIENT_SECRET",
      "EMAIL_TO_1",
    ],
    function (error) {
      if (error) {
        res.status(500).send({ error });
      } else {
        const {
          MEMBERSHIP,
          SALUTATION,
          FNAME,
          LNAME,
          COMPANY,
          TITLE,
          EMAIL,
        } = req.body;

        const mailList =
          process.env.NODE_ENV === "development"
            ? [process.env.EMAIL_TO_1]
            : [
                process.env.EMAIL_TO_1,
                process.env.EMAIL_TO_2,
                process.env.EMAIL_TO_3,
                process.env.EMAIL_TO_4,
              ];

        const mailOptions = {
          from: `creatingvalue.co`,
          subject: `New member subscription for: ${COMPANY} | ${SALUTATION} ${LNAME}, ${FNAME}`,
          html: `
          <h1>New member</h1>
          <p>I would like to join the Creating Value Alliance.</p>
          <ul>
            <li>Membership: ${MEMBERSHIP}</li>
            <li>Name: ${FNAME} ${LNAME}</li>
            <li>Company: ${COMPANY}</li>
            <li>Title: ${TITLE}</li>
            <li>Email: ${EMAIL}</li>
          </ul>
        `,
          auth: {
            user: process.env.GOOGLE_USER,
            refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
            accessToken: process.env.GOOGLE_ACCESS_TOKEN,
          },
        };

        const transporter = nodeMailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            type: "OAuth2",
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          },
        });

        transporter.on("token", (token) => {
          console.log("A new access token was generated");
          console.log("User: %s", token.user);
          console.log("Expires: %s", new Date(token.expires));
        });

        transporter
          .verify()
          .then(() => {
            mailList.forEach((email) => {
              transporter.sendMail(
                { to: email, ...mailOptions },
                (error, info) => {
                  if (error) {
                    res.status(500).send({ error });
                  }
                  res.status(200).send({ message: "Message sent." });
                }
              );
            });
          })
          .catch((error) => {
            res.status(500).send({ error });
          });
      }
    }
  );
});

module.exports = router;
