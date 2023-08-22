const User = require('../models/user');

const adminView = (req, res, next) => {
    User.find({}, (err, users) => {
        if (err) {
            console.log
        }
        res.render('admin', { title: 'BBB', header: 'Admin Page', users: users });
    });
};

module.exports = {
    adminView
};;