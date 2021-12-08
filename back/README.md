# WifiEvent Backend

## Requirements
docker

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
NETBLOCK_VERSION=v0.9.1.1
CP_VERSION=v0.8.1.0
COOKIE_SECRET=secret
MAIL_ID=mailid
MAIL_PW=mailpw
```

## Launch

### Docker

```
# start
docker compose up -d --build node

# end
docker compose down
```

### Dummy data

```
docker exec -it wifievent-node npm run sequelize db:seed:all
```