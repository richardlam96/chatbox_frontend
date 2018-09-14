FROM node:8.11.4

CMD mkdir -p /app/discord_frontend
WORKDIR /app/discord_frontend

ADD package*.json /app/discord_frontend

RUN npm install

COPY . /app/discord_frontend

CMD ["npm", "start"]

