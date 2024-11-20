const bcrypt = require("bcrypt");
const userModel = require("../../db/models/userModel");

const userController = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        // Check if the user already exists
        const userExists = await userModel.findOne({ email });
        if (userExists) {
            return res.status(400).send("User already exists");
        }

        // Validate that all fields are provided
        if (!fullName || !email || !password) {
            return res.status(400).send("Please fill all the fields to register");
        }

        // Generate salt and hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        await userModel.create({
            fullName,
            email,
            password: hashedPassword
        });

        // Redirect to the homepage after successful registration
        return res.redirect("/");

    } catch (error) {
        console.error("Error during user registration:", error); // Log error for debugging
        return res.status(500).send("Internal server error");
    }
};

module.exports = userController;
