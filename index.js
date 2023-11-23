const express = require("express");
const app = express();
const staticRouter = require("./routes/static");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", staticRouter);
app.listen(2222, () => console.log("Listening"));
