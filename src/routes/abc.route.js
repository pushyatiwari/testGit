const express = require('express');
const abcHandler = require('../handlers/abc.handler.js');

const abcRouter = express.Router();

abcRouter.get('/p1', abcHandler.abcgetHandler);

module.exports = {
  abcRouter,
};
