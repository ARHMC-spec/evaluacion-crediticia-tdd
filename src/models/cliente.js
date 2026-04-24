const { DataTypes } = require('sequelize');
const sequelize = require('../../database/db');

const Cliente = sequelize.define('Cliente', {
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ingresos: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  deudas: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  resultado: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Cliente;