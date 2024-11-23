const adminModel = require("../../../db/models/adminModel");

const editProductPage = async (_, res) => {
    try {
        const admin = await adminModel.findOne().populate("products");
        res.render("editProduct", {admin: admin});
    } catch (error) {
        console.log(error);
    };
};

module.exports = editProductPage;