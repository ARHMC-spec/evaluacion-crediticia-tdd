#  Evaluación Crediticia con TDD

## Descripción
Aplicación web desarrollada en Node.js que permite evaluar si un cliente es apto para recibir un crédito en base a su edad, ingresos y nivel de deudas.

El proyecto implementa el enfoque de Desarrollo Guiado por Pruebas (TDD), incluye pruebas unitarias, uso de ORM con Sequelize y despliegue mediante Docker.

---

## Tecnologías utilizadas

- Node.js
- Express
- Jest (Pruebas unitarias)
- Sequelize (ORM)
- SQLite (Base de datos)
- Docker

---

## Lógica de evaluación

Un cliente será:

- ❌ RECHAZADO si:
  - Es menor de edad
  - Sus ingresos son menores a 1000
  - Sus deudas superan el 50% de sus ingresos

- ✅ APROBADO en caso contrario

---

## Cómo ejecutar el proyecto

### 1. Clonar repositorio
```bash
git clone https://github.com/TU-USUARIO/evaluacion-crediticia-tdd
cd evaluacion-crediticia-tdd