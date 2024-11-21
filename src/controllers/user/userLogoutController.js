const userLogoutController = (_, res) => {
    res.clearCookie('user', '', { 
        httpOnly: true,
        secure: true,   
    });
    res.redirect("/");
};

module.exports = userLogoutController;