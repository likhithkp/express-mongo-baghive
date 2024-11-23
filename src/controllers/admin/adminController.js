const adminModel = require("../../../db/models/adminModel");
const bcrypt = require("bcrypt");

const adminController = async(req, res) => {
    try {
       const admin = await adminModel.find();
        if(admin.length > 0){
            return res
                .status(500)
                .send("Admin already exists!");
        }

        let {fullName, email, password} = req.body;

        if(!fullName || !email || !password){
            return res.status(400).send("All the required parameter are mandatory");
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        await adminModel.create({
            fullName,
            email,
            password: hash
        });

        res.status(203).send("Admin created");
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = adminController;