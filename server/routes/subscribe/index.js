const express = require('express');
const router = express.Router();

router.use('/membership', require('./membership'));
router.use('/mailchimp', require('./mailchimp'));

module.exports = router;
