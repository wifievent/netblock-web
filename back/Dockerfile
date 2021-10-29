FROM node:14 AS development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=development
COPY . .
CMD [ "node", "bin/www" ]
