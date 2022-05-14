const ExecutorController = require('./Controllers/ExecutorController');
const express = require('express');
const route = express.Router();

route.get('/divisor', ExecutorController.index);

module.exports = route;