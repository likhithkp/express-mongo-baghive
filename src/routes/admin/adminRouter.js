/* eslint-disable no-undef */
const express = require("express");
const { adminController, adminLoginController, adminHomeController } = require("../../controllers");
const adminLoginPageController = require("../../controllers/admin/adminLoginPageController");

const adminRouter = express.Router();

adminRouter.get("/login", adminLoginPageController);
adminRouter.get("/home", adminHomeController);
adminRouter.post("/login", adminLoginController);

if(process.env.NODE_ENV === "development"){
    adminRouter.post("/create", adminController);
};

module.exports = adminRouter;
