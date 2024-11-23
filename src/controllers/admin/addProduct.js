const adminModel = require("../../../db/models/adminModel");
const productModel = require("../../../db/models/productModel");

const addProduct = async (req, res) => {
    try {
        const admin= await adminModel.findOne();

        const {name ,price ,discount} = req.body;
        if(!name || !price || !discount || !req.file){
            return res.status(400).send("Please enter all the required fields to create a product");
        };

        const image = req.file.buffer;
        const product = await productModel.create({
            image,
            name,
            price,
            discount
        });

        admin.products.push(product._id);
        await product.save();
        await admin.save();
        res.redirect("/admin/home");
    } catch (error) {
        console.error(error.message);
    };
};

module.exports = addProduct;