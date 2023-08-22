const express = require('express');
const router = express.Router();
const {
    loginView,
    loginUser
} = require('../controllers/auth/loginController.js');

router.get('/', loginView);
router.post('/', loginUser);

module.exports = router;

// const authTokens = {};

// router.get('/', function (req, res, next) {
//     res.render('auth/login', { title: 'BBB', header: 'Login' });
// });

// router.post('/', function (req, res, next) {
//     const { email, password } = req.body;
//     const hashedPassword = getHashedPassword(password);

//     const user = users.find(u => {
//         return u.email === email && hashedPassword === u.password
//     });

//     if (user) {
//         const authToken = generateAuthToken();
//         authTokens[authToken] = user;
//         res.cookie('AuthToken', authToken);
//         res.redirect('dashboard');
//     } else {
//         res.render('auth/login', {
//             message: 'Invalid username or password',
//             messageClass: 'alert-danger'
//         });
//     }
// });