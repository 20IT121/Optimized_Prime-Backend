const express = require('express');

const dataRouter = express.Router();

const {getGraphSpecificContent} = require('./data.controller');


dataRouter.get('/:content',getGraphSpecificContent);

module.exports = dataRouter;
// 1 2 4/5 6 10