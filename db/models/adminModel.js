const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
    picture: Boolean,
    gstin: String
}) 

module.exports = mongoose.model("admin", adminSchema);