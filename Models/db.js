const Sequelize = require('sequelize');

//Conexão com banco de dados mySQL
const sequelize = new Sequelize('postapp', 'root', '391223', {
    host:"localhost",
    dialect:"mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}