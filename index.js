const express = require("express");
const app = express();
const staticRouter = require("./routes/static");
const msgRouter = require("./routes/msg");
const path = require("path");
const connectToDB = require("./database/connect");

connectToDB();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));

app.use("/", staticRouter);
app.use("/send", msgRouter);
app.listen(2222, () => console.log("Listening"));
