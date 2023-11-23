const mongoose = require("mongoose")
function connectToDB() {
	require("dotenv").config();
	const mongoDBURL = process.env.MONGODB_URI;
	mongoose.connect(mongoDBURL).then(console.log("Connected To MonngoDB")).catch((err) => { console.log("Mongo DB Err: ", err) });
}

module.exports = connectToDB;
