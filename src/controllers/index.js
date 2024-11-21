const adminController = require("./admin/adminController");
const homeController = require("./home/homeController");
const userController = require("./user/userController");
const userLoginController = require("./user/userLoginController");
const userLogoutController = require("./user/userLogoutController");
const userProfileController = require("./user/userProfileController");

module.exports = {
    userController,
    adminController,
    homeController,
    userLoginController,
    userProfileController,
    userLogoutController
}