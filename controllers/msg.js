const Msg = require("../models/msg");
async function createMsg(req, res) {
	const { user, text } = req.body;
	Msg.create({ user, text });
	const allMsgs = await Msg.find({});
	res.redirect("http://localhost:2222/");
}

module.exports = { createMsg }
