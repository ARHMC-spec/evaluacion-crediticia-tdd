const express = require('express');
const evaluar = require('./services/evaluador');
const Cliente = require('./models/cliente');

const app = express();

app.use(express.json());

/* =========================
   RUTA PRINCIPAL
========================= */
app.get('/', (req, res) => {
  res.send("API Evaluación Crediticia funcionando 🚀");
});

/* =========================
   POST - EVALUAR (para Thunder Client)
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
   GET - EVALUAR (para navegador)
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
   VER CLIENTES (ORM)
========================= */
app.get('/clientes', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* =========================
   SERVIDOR
========================= */
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});