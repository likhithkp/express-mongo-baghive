/* eslint-disable no-undef */
const jwt = require("jsonwebtoken");

const isLoggedIn = (req, res, next) => {
    try {
        // Retrieve token from cookies
        const token = req.cookies?.user;

        // Check if token exists
        if (!token || token === "") {
            req.flash("Error", "You need to login first!")
            return res.redirect("/"); // Redirect to login page if token is missing
        }

        // Verify token
        const verified = jwt.verify(token, process.env.JWT_KEY);

        // Attach user info to request object (optional, for use in routes)
        req.user = verified;

        // Proceed to the next middleware/route handler
        next();
    } catch (error) {
        console.error("JWT verification error:", error.message);

        // Redirect to login on any error
        req.flash("Error", "Something went wrong!")
        return res.redirect("/");
    }
};

module.exports = isLoggedIn;
