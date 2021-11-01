FROM node:14 AS development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=development \
  && npm install pm2 -g
COPY . .
CMD ["pm2-runtime", "start", "ecosystem.config.js"]