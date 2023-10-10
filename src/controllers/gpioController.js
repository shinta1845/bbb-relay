const express = require('express');
const router = express.Router();
const gpio = require('../models/gpio.js');

const gpioIndex = (req, res, next) => {
    res.render('gpio', { title: 'GPIO' });
};

const gpioCreate = (req, res, next) => {
    res.render('gpio', { title: 'GPIO' });
};

const gpioEdit = (req, res, next) => {
    res.render('gpio', { title: 'GPIO' });
};

module.exports = {
    gpioIndex,
    gpioCreate,
    gpioEdit
};