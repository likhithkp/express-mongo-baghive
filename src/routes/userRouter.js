const express = require("express");
const userController = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/create", userController)

module.exports = userRouter;
