
FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm rebuild bcrypt --build-from-source

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
