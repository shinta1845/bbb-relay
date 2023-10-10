# BBB-RELAY

## Prerequisites:
* NodeJS with [NVM (Node Version Management)](https://github.com/nvm-sh/nvm)
```
nvm install 14
```

* enable yarn from node 14 built-in corepack
```
corepack enable
```

## Installation:

* Install dependencies
```
yarn install
```

* modify .env
```
cp .env.example .env

PROD_DB_STORAGE='../database/<your-database-name>.sqlite'
...
```

* init db with seeder
```
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

* run (strongloop pm or pm2)
[ref1](https://expressjs.com/en/advanced/best-practice-performance.html)
[ref2](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment)
```

```