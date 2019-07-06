const express = require("express");   //bring in express
const app = express();                //initialize app

const appConfig = require("./config/main-config.js");
const routeConfig = require("./config/route-config.js");

appConfig.init(app, express);
routeConfig.init(app);

module.exports = app;