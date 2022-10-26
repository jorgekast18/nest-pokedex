<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Execute in develop mood

1. Clone the repository
2. Execute
```
yarn install
```

3. Install NestJs
```
npm i -g @nestjs/cli
```

4. Up Database
```
docker-compose up -d
```

5. Clone the file __.env.template.__ and rename to __.env.__

6. Complete the ```.env.``` file with the value correct.

7. Start de app in dev mood wiht the command:
```
yarn start:dev
```

8. Populate DB with the seed
```
http://localhost:3000/api/v2/seed
```

## Stack used
* MongoDB
* Nest

# Production Build

1. Create file ```.env.prod.```
2. Complete environment variables.
3. Create the image 

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```


