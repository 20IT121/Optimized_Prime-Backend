const express = require('express');

const dataRouter = express.Router();

const {getEveryInfo , getSpecificInfo } = require('./data.controller');

// Assuming that incoming request will come for ds only
dataRouter.get('/?kind=ds&type&name',getEveryInfo);
dataRouter.get('/?kind=ds&type&name&content',getSpecificInfo);

module.exports = dataRouter;