const mongoose = require("mongoose")
function connectToDB() {
	mongoose.connect("mongodb://127.0.0.1:27017/msgDb").then(console.log("Connected To MonngoDB")).catch((err) => { console.log("Mongo DB Err: ", err) });
}

module.exports = connectToDB;
