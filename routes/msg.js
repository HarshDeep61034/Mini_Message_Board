const express = require('express');
const router = express.Router();
const { createMsg } = require("../controllers/msg")

router.post("/", createMsg);


module.exports = router
