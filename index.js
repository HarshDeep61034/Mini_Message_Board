const express = require("express");
const app = express();
app.get("/", (req, res) => {
	res.end("HELLO WORLD");
})
app.listen(2222, () => console.log("Listening"));
