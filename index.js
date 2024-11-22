/* eslint-disable no-undef */
const express = require("express");
const app = express(); 
const cookieParser = require("cookie-parser");
const path = require("path");
const flash = require("connect-flash");
const expressSession = require("express-session");
const db = require("./config/mongooseConfig");
const routes = require("./src/routes/index");

require("dotenv").config();

app.set("view engine", "ejs");
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET 
}));
app.use(flash());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

app.listen(3000);