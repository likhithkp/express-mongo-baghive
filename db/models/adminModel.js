const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    products: {
        type: Array,
        default: []
    },
    picture: Boolean,
    gstin: String
}) 

module.exports = mongoose.model("admin", adminSchema);