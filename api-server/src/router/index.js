
const express = require('express');
const auth = require('./auth');
const tickets = require('./ticket');
const users = require('./user');
const usertypes = require('./usertype')

const routes  = express.Router();

routes.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
  next();
  routes.options('*', (req, res) => {
      res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
      res.send();
  });
});
routes.use(process.env.api, auth);
routes.use(process.env.api, tickets);
routes.use(process.env.api, users);
routes.use(process.env.api, usertypes);

module.exports = routes;