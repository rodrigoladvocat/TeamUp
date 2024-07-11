# Description

Monolith containing 5 modules that servers the TeamUp Application.

# How to run

  1. Clone repo and `npm i` 
  2. Create .env with DATABASE_URL="file:./dev.db" and JWT_SECRET="any string here"
  3. (optional) Generate the JWT_SECRET by executing `openssl rand 256 | base64` [as shown in this link](https://github.com/dwyl/hapi-auth-jwt2/issues/48)
  4. (Optional) Install and run Desktop Docker 
  5. If using Desktop Docker, Execute `docker-compose -f docker-compose.yml build --no-cache && docker-compose -f docker-compose.yml up -d`.
  6. If fail to execute on docker, execute `npm run start:dev` as an alternative.
  7. Open swagger in browser at [localhost:3000/api](http://localhost:3000/api)
  8. Try out each route

# Tests
```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

# SQL Database diagram
[See this links](prisma/dbml/links.txt) to learn how to generate an updated version of this diagram.
![diagram image](prisma/dbml/diagram.png)
