FROM node:20.19.0-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# Запускаем dev-сервер
CMD ["npm", "start"]
