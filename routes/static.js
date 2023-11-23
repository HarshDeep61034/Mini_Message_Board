const express = require('express');
const router = express.Router();
const { renderHomePage } = require("../controllers/static")

router.get("/", renderHomePage);


module.exports = router
