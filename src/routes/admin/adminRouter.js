/* eslint-disable no-undef */
const express = require("express");
const {
        adminController,
        adminLoginController,
        adminHomeController,
        addProductPage,
        addProduct,
        editProductPage,
        editProduct,
    } = require("../../controllers");
const adminLoginPageController = require("../../controllers/admin/adminLoginPageController");

const upload = require("../../../config/multerConfig");
const adminRouter = express.Router();

adminRouter.get("/login", adminLoginPageController);
adminRouter.post("/login", adminLoginController);
adminRouter.get("/home", adminHomeController);
adminRouter.get("/addProduct", addProductPage);
adminRouter.post("/addProduct", upload.single("image"), addProduct);
adminRouter.get("/editProduct/:id", editProductPage);
adminRouter.post("/editProduct", upload.single("image"), editProduct);

if(process.env.NODE_ENV === "development"){
    adminRouter.post("/create", adminController);
};

module.exports = adminRouter;
