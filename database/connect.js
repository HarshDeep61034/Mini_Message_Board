const mongoose = require("mongoose")
function connectToDB() {
	// require("dotenv").config();
	const mongoDBURL = "mongodb+srv://admin:H@rsh7017@cluster0.pkzzmbo.mongodb.net/";
	mongoose.connect(mongoDBURL).then(console.log("Connected To MonngoDB")).catch((err) => { console.log("Mongo DB Err: ", err) });
}

module.exports = connectToDB;
