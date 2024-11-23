const addProduct = require("./admin/addProduct.js");
const addProductPage = require("./admin/addProductPage.js");
const adminController = require("./admin/adminController");
const adminHomeController = require("./admin/adminHomeController.js");
const adminLoginController = require("./admin/adminLoginController.js");
const editProduct = require("./admin/editProduct.js");
const editProductPage = require("./admin/editProductPage.js");
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
    addProduct,
    addProductPage,
    editProductPage,
    editProduct,
    homeController,
    userLoginController,
    userProfileController,
    userLogoutController,
}