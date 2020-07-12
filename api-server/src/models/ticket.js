module.exports = (sequelize, type) => {
    let Ticket = sequelize.define('Tickets', {
        idTicket: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING,
        ticketPedido:{type:type.STRING, 
          allowNull: true},        
    })
    return Ticket
}