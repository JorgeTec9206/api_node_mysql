FROM node:18-bullseye

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8081

CMD ["npm","start"]