const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

router.get('/', function (req, res, next) {
    res.render('register', { title: 'User', header: 'Register' });
}
);

module.exports = router;