# WifiEvent Backend

## Requirements
npm

docker (option)

## Before Launch

### .env
```
DB_USER=dev
DB_PW=secret
DB_NAME=dev
DB_HOST=db
DB_TYPE=mariadb
DB_PORT=3306
NODE_ENV=development
NETBLOCK_VERSION=v0.8.0.1
COOKIE_SECRET=secret
MAIL_ID=mailid
MAIL_PW=mailpw
```

## Launch

### First

```
npm install
```

### Docker

```
# start
docker compose up -d --build node

# end
docker compose down
```
