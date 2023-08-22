const User = require('../../models/_user.js');
const crypto = require('crypto');

const registerView = (req, res, next) => {
    res.render("auth/register", {});
};

const registerUser = (req, res, next) => {
    const salt = crypto.randomBytes(16);
    crypto.pbkdf2(req.body.password, salt, 310000, 32, 'sha512', async (err, hashedPassword) => {
        if (err) {
            res.redirect('/register?error=1'); // failed to hash password
        }

        try {
            const user = await User.create({
                username: req.body.username,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: hashedPassword,
                salt: salt
            });

            // res.redirect('/login');
            req.login(user, (err) => {
                if (err) {
                    res.redirect('/register?error=3'); // failed to login
                }
                res.redirect('/dashboard');
            });
        } catch (err) {
            res.redirect('/register?error=2'); // failed to create new user
        }
    });
};

module.exports =  {
    registerView,
    registerUser
};

    // const { email, firstname, lastname, password, confirmPassword } = req.body;

    // if (!email || !firstname || !lastname || !password || !confirmPassword) {
    //     res.render('auth/register', {
    //         message: 'Please enter all required fields',
    //         messageClass: 'alert-danger'
    //     });
    //     return;
    // }

    // if (password !== confirmPassword) {
    //     res.render('auth/register', {
    //         message: 'Password not match!',
    //         messageClass: 'alert-danger'
    //     });
    //     return;
    // } else {
    //     User.find(u => { return u.email === email }, (err, user) => {
    //         if (err) {
    //             res.render('auth/register', {
    //                 message: 'Error registering user',
    //                 messageClass: 'alert-danger'
    //             });
    //             return;
    //         } else if (user) {
    //             res.render('auth/register', {
    //                 message: 'User already registered!',
    //                 messageClass: 'alert-danger'
    //             });
    //             return;
    //         } else {
    //             const hashedPassword = getHashedPassword(password);

    //             const newUser = new User({
    //                 firstname,
    //                 lastname,
    //                 email,
    //                 password: hashedPassword
    //             });

    //             newUser.save((err, user) => {
    //                 if (err) {
    //                     res.render('auth/register', {
    //                         message: 'Error registering user',
    //                         messageClass: 'alert-danger'
    //                     });
    //                     return;
    //                 } else {
    //                     res.render('auth/login', {
    //                         message: 'Registration Complete! Please login to continue.',
    //                         messageClass: 'alert-success'
    //                     });
    //                     return;
    //                 }
    //             });
    //         }
    //     });
    // }