const adminModel = require("../../../db/models/adminModel");

const adminController = async(req, res) => {
    const admin = await adminModel.find();
    if(admin.length > 0){
        return res
            .status(500)
            .send("You dont have permission to create a new admin");
    }

    let {fullName, email, password} = req.body;

    await adminModel.create({
        fullName,
        email,
        password
    });

    res.status(203).send("Admin created");
};

module.exports = adminController;