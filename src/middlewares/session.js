// const user = require('../models/user.js');

// const userSession = (req, res, next) => {
//     if (req.session && req.session.user) {
//         user.get(req.session.user, (err, user) => {
//             if (user) {
//                 req.user = user;
//             } else {
//                 delete req.user;
//                 delete req.session.user;
//             }
//             next();
//         });
//     } else {
//         next();
//     }
// }

// module.exports = userSession;