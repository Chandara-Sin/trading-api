# TRADING-API

- ### [For Development](#development)
- ### [Use Docker](#docker)

## Development

[![Code Style: Prettier](https://img.shields.io/badge/Code_Style-Prettier-fb6f92.svg?style=flat-square)](https://prettier.io/)

### Create `.env` for API

```env
NODE_ENV=
PORT=
DATABASE_URL=
PRISMA_GENERATE_OUTPUT=../src/generated/client
API_KEY_PUBLIC=
```

---

> _This is project use Prisma_

## Prisma

[More Info - _prisma set up relational database from scratch_](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres)

### Generate Prisma Client for yarn berry

```sh
yarn generate
```

### How to migrate DB

```sh
yarn migrate
```

### Run Project

```sh
yarn dev
```

### Build Project

```sh
yarn build:local
```

### Run Unit Test

```sh
yarn test
```

---

> _For Integration Test_

### Use docker-compoes.test.yml

```sh
yarn database-test:up
```

### Run Integration Test

```sh
yarn test:integration
```

---

## Docker

### Create `.env.local` for API

```env
NODE_ENV=
PORT=
DATABASE_URL=postgresql://<user>:<password>@postgres:<port>/<db>?schema=public&connect_timeout=300
PRISMA_GENERATE_OUTPUT=../generated/client
API_KEY_PUBLIC=
```

### Run Docker Image Postgres

```sh
docker compose up db -d
```

### Run Project with Compose

```sh
docker compose up -d
```
