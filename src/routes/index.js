const express = require("express");
const router = express.Router();
const userRouter = require("./user/userRouter");
const adminRouter = require("./admin/adminRouter");
const homeRouter = require("./home/homeRouter");
const userProfileRouter = require("./user/userProfileRouter");
const isLoggedIn = require("../../middlewares/auth");

router.use("/", homeRouter);
router.use("/user", userRouter);
router.use("/admin", adminRouter);
router.use("/home", isLoggedIn, userProfileRouter);

module.exports = router;