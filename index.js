const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
const db = require("./db/config/mongooseConfig");
const routes = require("./src/routes/index");

app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

app.listen(3001);