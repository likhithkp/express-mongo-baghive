const express = require("express");
const router = express.Router();
const userRouter = require("./userRouter");
const adminRouter = require("./adminRouter");
const homeRouter = require("./homeRouter");

router.use("/", homeRouter);
router.use("/user", userRouter);
router.use("/admin", adminRouter);

module.exports = router;