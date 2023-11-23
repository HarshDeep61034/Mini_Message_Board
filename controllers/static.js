const Msg = require("../models/msg");
async function renderHomePage(req, res) {
	const allMsgs = await Msg.find({});
	res.render("home", {messages: allMsgs});
}

module.exports = { renderHomePage }
