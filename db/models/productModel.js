const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    image: {
        // eslint-disable-next-line no-undef
        type: Buffer,
        required: true
    },
    name: String,
    price: String,
    discount: {
        type: Number,
        default: 0
    },
})

module.exports = mongoose.model("product", productSchema);