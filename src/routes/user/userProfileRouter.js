const express = require("express");
const { userProfileController } = require("../../controllers");

const userProfileRouter = express.Router()
userProfileRouter.get("/", userProfileController);

module.exports = userProfileRouter;