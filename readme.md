# API GraphQL JWT Authentication 

## Requirements

Download and install [NodeJS](http://nodejs.org/download/) to get [npm](https://www.npmjs.org/).

## Install packages
```bash
npm install
```

## Manage environement
```bash
cp env/.env env/.env.dev
cp env/.env env/.env.prod
```

## Update JWT_TOKEN

You must generate a new JWT_TOKEN in .env.dev and .env.prod

## Run

Development :
```bash
npm run dev
```

Production :
```bash
npm run prod
```

## Test
```bash
npm run dev:db:test
```
