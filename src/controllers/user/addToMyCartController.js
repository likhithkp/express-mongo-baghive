const userModel = require("../../../db/models/userModel");

const addToMyCartController = async(req, res) => {
    try {
        const user = await userModel.findOne({email: req?.user?.email});
        user.cart.push(req?.params?.id);
        await user.save();
        res.redirect("/home");
    } catch (error) {
        console.error(error.message);
    };
};

module.exports = addToMyCartController;