var express = require('express');
var router = express.Router();

const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const dashboardRouter = require('./routes/dashboard');
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');

router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/dashboard', dashboardRouter);
router.use('/user', userRouter);
router.use('/admin', adminRouter);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'BBB', header: 'dashboard Page' });
});

router.get('/dashboard', function (req, res, next) {
  res.render('dashboard', { title: 'BBB', header: 'dashboard Page' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'BBB', header: 'About Us' });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'BBB', header: 'Contact Us' });
});

// router.get('/index?page=:page', function (req, res, next) {
//   const page = req.query.page;
//   if (page === 'register') {
//     router.use('/register', require('./register'));
//   }
// });

module.exports = router;