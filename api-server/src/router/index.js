
const express = require('express');
const auth = require('./auth');
const tickets = require('./ticket');

const routes  = express.Router();


routes.use(process.env.api, auth);
routes.use(process.env.api, tickets);
console.log(routes);
/* routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Ok' });
});

routes.use(function(req, res) {
  response.sendNotFound(res);
}); */

module.exports = routes;