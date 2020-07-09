const express = require('express');
const body = require('body-parser');
const app = express().use(body.json());
const { Sequelize } = require('sequelize');
const DDBB = require('./config/db')
//variable de entorno
const dotenv = require('dotenv');
dotenv.config();

//conexion
// router
var route = require('./router');
app.use(route);


app.listen(process.env.PORT || 8080,()=> console.log('server is online'));
