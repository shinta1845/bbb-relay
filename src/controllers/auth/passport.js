const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/User");

const loginPassport = passport => {
  passport.use(
    new LocalStrategy(async function verify(username, password, done) {
      try {
        const user = await User.findOne({ where: { username: username } });
        if (!user) {
          return done(null, false, { message: "Incorrect username or password." });
        }

        bcrypt.compare(password, user.password, (error, isMatch) => {
          if (error) {
            return done(error);
          }
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Incorrect username or password." });
          }
        });
      } catch (err) {
        return done(err);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
 


  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findByPk(id);
      done(null, user);
    }
    catch (err) {
      done(err);
    }
    // User.findById(id, (error, user) => {
    //   done(error, user);
    // });
  });
};

module.exports = {
  loginPassport,
};