const evaluar = require('../src/services/evaluador');

test("Debe aprobar crédito con buenos ingresos", async () => {
  const resultado = await evaluar(30, 3000, 200);
  expect(resultado).toBe("APROBADO");
});

test("Debe rechazar crédito por bajos ingresos", async () => {
  const resultado = await evaluar(25, 800, 100);
  expect(resultado).toBe("RECHAZADO");
});

test("Debe rechazar crédito si tiene muchas deudas", async () => {
  const resultado = await evaluar(40, 3000, 2500);
  expect(resultado).toBe("RECHAZADO");
});

// 🔥 casos límite
test("Debe aprobar con ingresos exactamente 1000", async () => {
  const resultado = await evaluar(30, 1000, 100);
  expect(resultado).toBe("APROBADO");
});

test("Debe aprobar si deudas son 50% exacto", async () => {
  const resultado = await evaluar(30, 2000, 1000);
  expect(resultado).toBe("APROBADO");
});

// 🔥 NUEVO (IMPORTANTE)
test("Debe rechazar si es menor de edad", async () => {
  const resultado = await evaluar(16, 2000, 100);
  expect(resultado).toBe("RECHAZADO");
});

// 🔥 validación de errores
test("Debe lanzar error con datos inválidos", async () => {
  await expect(evaluar(-1, 0, -5)).rejects.toThrow("Datos inválidos");
});

// 🔥 NUEVO (PRO)
test("Debe lanzar error si faltan datos", async () => {
  await expect(evaluar(null, 2000, 100)).rejects.toThrow("Datos incompletos");
});