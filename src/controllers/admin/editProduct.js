const adminModel = require("../../../db/models/adminModel");
const productModel = require("../../../db/models/productModel");

const editProduct = async (req, res) => {
    try {
        const admin = await adminModel.findOne();

        const { name, price, discount } = req.body;
        if (!name || !price || !discount || !req.file) {
            return res.status(400).send("Please enter all the required fields to edit a product");
        };

        const image = req.file.buffer;
        const product = await productModel.findOneAndUpdate({
            image,
            name,
            price,
            discount
        });

        await product.save();
        await admin.save();
        res.redirect("/admin/home");
    } catch (error) {
        console.log(error);
    };
};

module.exports = editProduct;