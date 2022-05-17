const express = require('express');
const router = express.Router();
const dealController = require('../controllers/deal.js');

router.get('/', dealController.deal.get);

module.exports = router;
