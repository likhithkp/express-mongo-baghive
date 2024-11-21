const express = require("express");
const { homeController } = require("../../controllers");
const homeRouter = express.Router()

homeRouter.get("/", homeController);

module.exports = homeRouter;