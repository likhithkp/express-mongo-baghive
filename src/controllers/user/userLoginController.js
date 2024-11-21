const userModel = require("../../../db/models/userModel");
const bcrypt = require("bcrypt");
const jwt  = require("jsonwebtoken");

const userLoginController = async (req, res) => {
    const {email, password} = req.body;

    // Find user by email
    const user = await userModel.findOne({email});
    if(!user){
        res.status(404).send("User not found, please create an account to login");
        return;
    }; 

    //Compare and verify the hashed password
    const verified = await bcrypt.compare(password, user.password);
    if(!verified){
        res.status(404).send("Something went wrong, please login again");
        return;
    };

    const token = jwt.sign({email, id: user._id}, "secretKey");
    res.cookie("user", token, {
        httpOnly: true,
        secure: true 
    });

    res.redirect("/home");
}

module.exports = userLoginController;