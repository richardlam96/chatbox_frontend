FROM node:8.11.4

WORKDIR /usr/src/discord_fronend

ADD package*.json ./

RUN npm install

COPY . .

EXPOSE 3001
CMD ["npm", "start"]

