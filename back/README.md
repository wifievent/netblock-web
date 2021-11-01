# WifiEvent Backend

## Requirements
npm

docker (option)

## Before Launch

### conf.d
anyname.cnf
```
[client]
port = 3306
default-character-set=utf8
[mysqld]
# bind-address is IMPORTANT
bind-address = 0.0.0.0
key_buffer_size = 512M
innodb_buffer_pool_size = 512M
init_connect="SET collation_connection=utf8_general_ci"
character-set-server = utf8
collation-server = utf8_unicode_ci
[mysql]
default-character-set=utf8
```

### .env
```
DB_USER=yourdbuser
DB_PW=yourdbpw
DB_NAME=yourdbname
DB_HOST=yourdbhost
DB_TYPE=yourdbtype
NODE_ENV=youwant
NETBLOCK_VERSION=v0.8.0.1
```

## Launch

### First

```
npm install
```

### Docker

```
# start
docker compose up -d

# end
docker compose down
```