const express = require('express');
const evaluar = require('./services/evaluador');
const Cliente = require('./models/cliente');
const sequelize = require('../database/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

/* =========================
   CONEXIÓN DB
========================= */
sequelize.sync()
  .then(() => console.log("Base de datos conectada"))
  .catch(err => console.error("Error DB:", err));

/* =========================
   RUTA PRINCIPAL
========================= */
app.get('/', (req, res) => {
  res.send("API Evaluación Crediticia funcionando 🚀");
});

/* =========================
   POST - EVALUAR
========================= */
app.post('/evaluar', async (req, res) => {
  try {
    const { edad, ingresos, deudas } = req.body;

    const resultado = await evaluar(edad, ingresos, deudas);

    res.json({ resultado });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/* =========================
   GET - EVALUAR
========================= */
app.get('/evaluar', async (req, res) => {
  try {
    const { edad, ingresos, deudas } = req.query;

    const resultado = await evaluar(
      Number(edad),
      Number(ingresos),
      Number(deudas)
    );

    res.json({ resultado });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/* =========================
   VER CLIENTES
========================= */
app.get('/clientes', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener clientes" });
  }
});

/* =========================
   SERVIDOR
========================= */
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});