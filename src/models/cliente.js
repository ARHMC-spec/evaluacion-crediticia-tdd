const { DataTypes } = require('sequelize');
const sequelize = require('../../database/db');

const Cliente = sequelize.define('Cliente', {
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 18
    }
  },
  ingresos: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  deudas: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  resultado: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true // createdAt y updatedAt
});

module.exports = Cliente;