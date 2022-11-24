## Installation

```bash
   $ npm install
```

## Set Enviroment for secret key JWT and other configurations

```bash
   $ cp .env.example .env
```

To set up on multiple environments, such as dev, stage or prod, we do as follows:

```bash
   $ cp .env.example .env.dev # or .env.stage, etc
```

## Config settings .env for send notification when a user registers, forgot password or change password

```
   EMAIL_HOST=smtp.mailtrap.io
   EMAIL_PORT=2525
   EMAIL_AUTH_USER=[:user]
   EMAIL_AUTH_PASSWORD=[:password]
   EMAIL_DEBUG=true
   EMAIL_LOGGER=true
   EMAIL_LAYOUT_DIR='templates/emails/'
   EMAIL_PARTIAL_DIR='templates/emails/'
   EMAIL_VIEW_PATH='/templates/emails/'
   EMAIL_DEFAULT_LAYOUT='index'
```

## Config settings .env for connect Postgresql

Once the database has been configured, start the Nest App via ```npm run start:dev``` it automatically synchronizes the entities so ready to use. :heart_eyes_cat:

```
   TYPEORM_CONNECTION = "postgres"
   TYPEORM_HOST = "localhost"
   TYPEORM_PORT = 5432
   TYPEORM_USERNAME = [:user]
   TYPEORM_PASSWORD = [:password]
   TYPEORM_DATABASE = [:database]
   TYPEORM_AUTO_SCHEMA_SYNC = true
   TYPEORM_ENTITIES = "dist/**/*.entity.js"
   TYPEORM_SUBSCRIBERS = "dist/subscriber/**/*.js"
   TYPEORM_MIGRATIONS = "dist/migrations/**/*.js"
   TYPEORM_ENTITIES_DIR = "src/entity"
   TYPEORM_MIGRATIONS_DIR = "src/migration"
   TYPEORM_SUBSCRIBERS_DIR = "src/subscriber"
```

## Install TypeScript Node

```bash
   $ npm install -g ts-node
```

## Install Nest
```bash
   $ npm install -g @nestjs/cli
```

## Running the app

```bash
    # development
    $ npm run start

    # watch mode
    $ npm run start:dev

    # production mode
    $ npm run start:prod
```

## Url Swagger for Api Documentation

```
http://127.0.0.1:3000/docs
```

Configure `SWAGGER_USER` and `SWAGGER_PASSWORD` in the .env file and set `NODE_ENV` to `local` or `dev`or `staging` to access the SWAGGER(Open Api) documentation with basic authentication.

```
NODE_ENV=[:enviroments]
SWAGGER_USER=[:user]
SWAGGER_PASSWORD=[:password]
```

If you want to add more environments, include them in the `SWAGGER_ENVS` array in `main.ts`, see the following:

```typescript 
const SWAGGER_ENVS = ['local', 'dev', 'staging'];
```

## Configuring the NODE_API_PORT environment variable as the default port if you don't want to use the default

```
   NODE_API_PORT=3333 
```

## Configuring the ENDPOINT_CORS environment variable for app frontend

```
   ENDPOINT_CORS='http://127.0.0.1:4200' 
```

## Docker

There is a `docker-compose.yml` file for starting Postgres with Docker.

`$ docker-compose up`

After running, you can stop the Docker container with

`$ docker-compose down`