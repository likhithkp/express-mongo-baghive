/* eslint-disable no-undef */
const express = require("express");
const { adminController } = require("../controllers");

const adminRouter = express.Router();

if(process.env.NODE_ENV === "development"){
    adminRouter.post("/create", adminController)
}

module.exports = adminRouter;
