const express = require("express");
const userLoginController = require("../../controllers");

const userLogoutRouter = express.Router();
userLogoutRouter.post("/logout", userLoginController);

module.exports = userLogoutRouter;