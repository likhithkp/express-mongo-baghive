const express = require("express");
const userLoginController = require("../controllers/userLoginController");

const userLoginRouter = express.Router();
userLoginRouter.post("/login", userLoginController);

module.exports = userLoginRouter;