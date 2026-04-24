const express = require('express');
const evaluar = require('./services/evaluador');
const Cliente = require('./models/cliente');

const app = express();

app.use(express.json());

// Ruta inicial
app.get('/', (req, res) => {
  res.send("API Evaluación Crediticia funcionando 🚀");
});

// POST evaluar
app.post('/evaluar', async (req, res) => {
  try {
    const { edad, ingresos, deudas } = req.body;

    const resultado = await evaluar(edad, ingresos, deudas);

    res.json({ resultado });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 🔥 NUEVO: ver clientes
app.get('/clientes', async (req, res) => {
  const clientes = await Cliente.findAll();
  res.json(clientes);
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});