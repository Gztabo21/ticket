module.exports = (sequelize, type) => {
    return sequelize.define('UserTypes', {
        idUserType: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING,       
    })
}