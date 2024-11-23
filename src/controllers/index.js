const adminController = require("./admin/adminController");
const adminHomeController = require("./admin/adminHomeController.js");
const adminLoginController = require("./admin/adminLoginController.js");
const homeController = require("./home/homeController");
const userController = require("./user/userController");
const userLoginController = require("./user/userLoginController");
const userLogoutController = require("./user/userLogoutController");
const userProfileController = require("./user/userProfileController");

module.exports = {
    userController,
    adminController,
    adminLoginController,
    adminHomeController,
    homeController,
    userLoginController,
    userProfileController,
    userLogoutController
}