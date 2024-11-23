const adminModel = require("../../../db/models/adminModel");
const bcrypt = require("bcrypt");

const adminLoginController = async(req, res) => {
    const {email, password} = req.body;

    try{
        if(!email || !password){
            req.flash("Password and email is required");
            res.redirect("/admin/login");
        };

        const admin = await adminModel.findOne({ email });
        if(!admin){
            return res.status(404).send("Admin not found");
        };

        const verified = await bcrypt.compare(password, admin.password);
        if(!verified){
            return res.status(404).send("Something went wrong, please login again");
        };

        res.redirect("/admin/home");
    }catch(error){
        console.log(error.message);
    }

};

module.exports = adminLoginController;