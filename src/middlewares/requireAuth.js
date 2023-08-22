const requireAuth = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.redirect('auth/login', {
            message: 'Please login to continue',
            messageClass: 'alert-danger'
        });
    }
};

module.exports = requireAuth;