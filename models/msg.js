const mongoose = require("mongoose");

const msgSchema = new mongoose.Schema({
	text: {
		required: true,
		type: String,
	},
	
	user: {
		required: true,
		type: String
	},

	added: new Date()
});

const Msg = mongoose.model("Msg", msgSchema);

module.exports = Msg
