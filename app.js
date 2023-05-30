/** @format */

const express = require("express");

const app = express();

app.use(express.static("public")); /// make everything inside of public/ available

app.get("/", (req, res, next) => {
	res.sendFile(__dirname + "/views/home-page.html");
});

app.get("/contact", (req, res, next) => {
	res.sendFile(__dirname + "/views/contact-page.html");
});

app.listen(3000, () => {
	console.log("server is listening on port 3000");
});
