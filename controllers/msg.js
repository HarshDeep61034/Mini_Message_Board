const Msg = require("../models/msg");
async function createMsg(req, res) {
	const { user, text } = req.body;
	Msg.create({ user, text });
	const allMsgs = await Msg.find({});
	res.redirect("/");
}

module.exports = { createMsg }
