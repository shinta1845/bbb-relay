const express = require('express');
const router = express.Router();
const {
  registerView,
  registerUser
} = require('../controllers/auth/registerController.js');

router.get('/', registerView);
router.post('/', registerUser);

module.exports = router;

// router.post('/', function (req, res, next) {
//   const { email, firstname, lastname, password, confirmPassword } = req.body;
//   if (password !== confirmPassword) {
//     res.render('auth/register', {
//       message: 'Password not match!',
//       messageClass: 'alert-danger'
//     });
//   } else {
//     if (users.find(user => user.email === email)) {
//       res.render('auth/register', {
//         message: 'User already registered!',
//         messageClass: 'alert-danger'
//       });
//       return;
//     }
    
//     const hashedPassword = getHashedPassword(password);

//     users.push({
//       firstname,
//       lastname,
//       email,
//       password: hashedPassword
//     });

//     res.render('auth/login', {
//       message: 'Registration Complete! Please login to continue.',
//       messageClass: 'alert-success'
//     });
//   }
// });