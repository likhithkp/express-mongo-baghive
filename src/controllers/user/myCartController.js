const userModel = require("../../../db/models/userModel");

const myCartController = async (req, res) => {
    try {
        const user = await userModel.findOne({_id: req?.params?.id}).populate("cart");
        console.log(user);
        res.render("myCart", {user: user});
    } catch (error) {
        console.error(error.message);
    };
};

module.exports = myCartController;