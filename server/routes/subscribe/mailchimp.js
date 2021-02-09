const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.post('/', (req, res, next) => {
  const {
    EMAIL,
    FNAME,
    LNAME,
    MMERGE6,
    signupLocation
  } = req.body;

  if (!EMAIL) {
    res.status(400).send({ message: 'Failed, no email has been provided.' });
    return;
  }

  const mcData = {
    members: [
      {
        email_address: EMAIL,
        // single opt-in
        // note: to have double opt-in use 'pending'
        //  users will receive an e-mail with a confirmation link
        //  which they will have to follow to actually subscribe
        status: 'subscribed',
        merge_fields: {
          "FNAME": FNAME,
          "LNAME": LNAME,
          "MMERGE6": MMERGE6,
          "b_275128d8e166d053af088aa66_5c96284a31": signupLocation,
        }
      }
    ]
  }

  const uri = 'https://us19.api.mailchimp.com/3.0/lists';
  const listId = '5c96284a31';
  const url = `${uri}/${listId}`;

  const apiKeyMailchimp = process.env.API_MAILCHIMP;
  const requestSettings = {
    method: 'POST',
    headers: { Authorization: `auth ${apiKeyMailchimp}` },
    body: JSON.stringify(mcData),
  }

  fetch(url, requestSettings)
    .then((mailchimpRes) => mailchimpRes.json())
    .then((data) => {
      const { errors } = data;
      if (Array.isArray(errors) && errors.length) {
        errors.map(({ error, error_code }) => {
          if (error_code === 'ERROR_CONTACT_EXISTS') {
            res.status(422).send({ error_code: error_code, message: 'E-mail address already exists.' })
          } else {
            res.status(500).send({ error, error_code: error_code });
          }
        });
      } else {
        res.status(200).send(data);
      }
    }).catch((error) => {
      res.status(500).send({ error });
    });

});

module.exports = router;
