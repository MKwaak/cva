const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

router.post('/googledrive', (req, res) => {
  console.log('do something with: ', req);
  res.status(200);
});

router.post('/mailchimp', (req, res) => {
  const {
    email,
    name,
    lastName,
    profession,
    signupLocation
  } = req.body;

  if (email) {
    const mcData = {
      members: [
        {
          email_address: email,
          // single opt-in
          // note: to have double opt-in use 'pending'
          //  users will receive an e-mail with a confirmation link
          //  which they will have to follow to actually subscribe
          status: 'subscribed',
          merge_fields: {
            "FNAME": name,
            "LNAME": lastName,
            "MMERGE6": profession,
            "b_275128d8e166d053af088aa66_5c96284a31": signupLocation,
          }
        }
      ]
    }

    const uri = 'https://us19.api.mailchimp.com/3.0/lists';
    const listId = '5c96284a31';
    const apiKeyMailchimp = process.env.API_MAILCHIMP;
    const url = `${uri}/${listId}`;

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
              res.sendStatus(500);
            }
          });
        } else {
          res.sendStatus(200);
        }
      });
  } else {
    res.status(404).send({ message: 'Failed, no email has been provided.' });
  }
});

module.exports = router;
