const express = require('express');
const router = express.Router();
const pwm = require('../models/pwm.js');

const pwmIndex = (req, res, next) => {
    res.render('pwm', { title: 'PWM' });
};

module.exports = {
    pwmIndex,
    pwmCreate,
    pwmEdit
};