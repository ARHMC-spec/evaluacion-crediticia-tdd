FROM node:20-bullseye

WORKDIR /app

COPY package*.json ./

#IMPORTANTE: reconstruir sqlite3 para Linux del contenedor
RUN npm install --build-from-source

COPY . .

EXPOSE 3000

CMD ["node", "src/app.js"]