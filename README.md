# Evaluación Crediticia con TDD

## Descripción
Sistema que evalúa si un cliente puede recibir un crédito en función de sus ingresos y deudas.

## Tecnologías usadas
- Node.js
- Express
- Jest
- Sequelize
- SQLite

## Cómo ejecutar el proyecto

1. Instalar dependencias:

npm install

2. Ejecutar pruebas:

npm test

3. Ejecutar servidor:

node src/app.js

## Uso de la API

### Evaluar cliente

POST http://localhost:3000/evaluar

Ejemplo:

{
  "edad": 30,
  "ingresos": 3000,
  "deudas": 200
}

Respuesta:

{
  "resultado": "APROBADO"
}

### Ver clientes guardados

GET http://localhost:3000/clientes

## 🚀 Cómo ejecutar el proyecto

### 1. Instalar dependencias
npm install

### 2. Ejecutar pruebas
npm test

### 3. Ejecutar app
node src/app.js

### 4. Docker
docker build -t evaluacion-crediticia .
docker run -p 3001:3000 evaluacion-crediticia