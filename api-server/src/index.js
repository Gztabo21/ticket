const express = require('express');
const body = require('body-parser');
const app = express().use(body.json());
const { Sequelize } = require('sequelize');

//conexion
const sequelize = new Sequelize('ticket', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
/* try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } */


app.listen( 8080,()=> console.log('server is online'));
