const productModel = require("../../../db/models/productModel");
const userModel = require("../../../db/models/userModel");

const userProfileController = async (req, res) => {
    try {
        const user = await userModel.findOne({email: req.user.email});
        const productData  = await productModel.find();
        res.render("home", {products: productData, user: user});
    } catch (error) {
        console.error(error);
    };
};

module.exports = userProfileController;