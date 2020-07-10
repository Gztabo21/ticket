const Sequelize = require('sequelize')
//models
const TicketModel = require('../models/ticket');
const UserModel = require('../models/user');
const UserTypeModel = require('../models/userType');
//conexion
const sequelize = new Sequelize('ticket', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})
//verifica si se conecto
sequelize.authenticate()
  .then(() => {
    return ('Conectado')
  })
  .catch(err => {
    return ('No se conecto')
  })
//Create databases
const Ticket   = TicketModel(sequelize, Sequelize)
const User     = UserModel(sequelize,Sequelize)
const UserType = UserTypeModel(sequelize,Sequelize)
//relaciones
User.hasMany(Ticket)
UserType.hasMany(User)
//Verificar si se creo la base de datos
sequelize.sync({ alter: true })
  .then(() => {
   return(`Database & tables created!`)
  })
//exporta las entidades
module.exports = {
  Ticket,
  User,
  UserType
}