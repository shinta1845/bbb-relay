const User = require('../../models/_user.js');
const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.use(new LocalStrategy(async function verify(username, password, done) {
    try {
        const user = await User.findOne({ where: { username: username } });
        if (!user) {
            return done(null, false, { message: 'Incorrect username or password.' });
        }

        crypto.pbkdf2(password, user.salt, 310000, 32, 'sha512', async (err, hashedPassword) => {
            if (err) {
                return done(err);
            }

            if (!crypto.timingSafeEqual(user.password, hashedPassword)) {
                return done(null, false, { message: 'Incorrect username or password.' });
            }

            return done(null, user);
        });
    } catch (err) {
        return done(err);
    }
}));

passport.serializeUser(function serializeUser(user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function deserializeUser(id, done) {
    try {
        const user = await User.findByPk(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

const loginView = (req, res, next) => {
    res.render("auth/login", { title: "Login" } );
}

const loginUser = (req, res, next) => {

};

module.exports =  {
    loginView,
    loginUser
};

    // const { email, password } = req.body;
    
    // if (!email || !password) {
    //     res.render('auth/login', {
    //         message: 'Please enter all required fields',
    //         messageClass: 'alert-danger',
    //         email,
    //         password
    //     });
    //     return;
    // } else {
    //     const hashedPassword = getHashedPassword(password);

    //     User.find(u => { return u.email === email && hashedPassword === u.password }, (err, user) => {
    //         if (err) {
    //             res.render('auth/login', {
    //                 message: 'Error logging in user',
    //                 messageClass: 'alert-danger'
    //             });
    //             return;
    //         } else if (!user) {
    //             res.render('auth/login', {
    //                 message: 'Invalid username or password!',
    //                 messageClass: 'alert-danger'
    //             });
    //             return;
    //         } else {
    //             // const authToken = generateAuthToken();
    //             // authTokens[authToken] = user;
    //             // res.cookie('AuthToken', authToken);
    //             // req.session.user = user;
    //             res.redirect('/dashboard');
    //         }
    //     });
    // }