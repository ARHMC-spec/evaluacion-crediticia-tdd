const Cliente = require('../models/cliente');

// 🔹 lógica separada
function calcularResultado(ingresos, deudas) {
  if (ingresos < 1000) return "RECHAZADO";
  if (deudas > ingresos * 0.5) return "RECHAZADO";
  return "APROBADO";
}

async function evaluar(edad, ingresos, deudas) {

  // 🔥 VALIDACIONES PRIMERO
  if (edad == null || ingresos == null || deudas == null) {
    throw new Error("Datos incompletos");
  }

  if (edad <= 0 || ingresos <= 0 || deudas < 0) {
    throw new Error("Datos inválidos");
  }

  // 🔹 lógica de negocio
  if (edad < 18) {
    return "RECHAZADO";
  }

  const resultado = calcularResultado(ingresos, deudas);

  await Cliente.create({
    edad,
    ingresos,
    deudas,
    resultado
  });

  return resultado;
}

module.exports = evaluar;