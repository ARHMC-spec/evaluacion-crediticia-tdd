const Cliente = require('../models/cliente');
const sequelize = require('../../database/db');

// 🔹 lógica separada (refactor TDD)
function calcularResultado(ingresos, deudas) {
  if (ingresos < 1000) return "RECHAZADO";
  if (deudas > ingresos * 0.5) return "RECHAZADO";
  return "APROBADO";
}

// 🔹 función principal
async function evaluar(edad, ingresos, deudas) {

  // validaciones
  if (edad <= 0 || ingresos <= 0 || deudas < 0) {
    throw new Error("Datos inválidos");
  }

  const resultado = calcularResultado(ingresos, deudas);

  await sequelize.sync();

  await Cliente.create({
    edad,
    ingresos,
    deudas,
    resultado
  });

  return resultado;
}

module.exports = evaluar;