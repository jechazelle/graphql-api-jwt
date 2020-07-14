# API GraphQL JWT Authentication 

## Requirements

Download and install [NodeJS](http://nodejs.org/download/) to get [npm](https://www.npmjs.org/).

## Install packages

```bash
npm install
```

## Manage environement

####  Development

```bash
cp env/.env env/.env.dev
```

- set NODE_ENV=development

#### Production

```bash
cp env/.env env/.env.prod
```

- set NODE_ENV=production

## Update JWT_TOKEN

You must generate a new JWT_TOKEN in .env.dev and .env.prod

## Migrate

```bash
npm run dev:db:migrate
```

## Seed

```bash
npm run dev:db:seed
```

## Run

#### Development

```bash
npm run dev
```

- Go to http://localhost:4000

#### Production

```bash
npm run prod
```

## Test

```bash
npm run dev:db:test
```
