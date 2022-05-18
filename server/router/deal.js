const express = require('express')
const router = express.Router();
const dealController = require('../controllers/dealController')

router.get("/", dealController.getDeal);
router.post("/", dealController.postComment);

module.exports = router;