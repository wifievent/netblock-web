FROM node:14 AS development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=development \
  && npm install pm2 -g
COPY . .
CMD ["pm2-runtime", "start", "app.js", "--name", "dev", "--watch"]
# RUN pm2 start app.js --name dev --watch
# CMD ["pm2", "logs", "dev"]