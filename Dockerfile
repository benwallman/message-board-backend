FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000

RUN npm run build

CMD [ "node", "./output/index.js" ]