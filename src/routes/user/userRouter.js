const express = require("express");
const {
        userController,
        userLoginController,
        userLogoutController
    } = require("../../controllers");

const userRouter = express.Router();
userRouter.post("/create", userController)
userRouter.post("/login", userLoginController)
userRouter.get("/logout", userLogoutController)

module.exports = userRouter;
