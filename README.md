# nodejs-ca-express

A NodeJS common JS project, used to practive a little.

## Code Overview

The code is based in a simple implementation of DDD + Clean Crchitecture + CQRS and other solid patters.

    .
    ├── ...
    ├── src                   
    │   ├── api                 # API First aproch for expose the domain    
    |   │   ├── controllers     # CA use cases bundled per folder    
    |   │   ├── app.js          # Entry poin of the API
    |   │   ├── server.js       # Server general configuration
    │   ├── domain              
    |   │   ├── use-cases       # CA use cases bundled per folder
    |   │   ├── infrastructure  # Cross cutting things
    |   │   ├── gateways        # CA external dependencies like DB and http services
    |   │   ├── events          # Domain events bundled per folder
    └── ...

## Frameworks and Libs
 
> * [Node JS 18.x](https://nodejs.dev/)
> * [Express](https://expressjs.com/)
> * [Axios](https://axios-http.com/)
> * [Postgress](https://node-postgres.com/)
> * [Winston](https://github.com/winstonjs/winston)
> * [Joi](https://joi.dev/)
> * [Jest](https://jestjs.io/)

## Setup your local environment

```
0. Install NVM
1. Install NodeJS 18
2. Install VSCode
3. Install the Eslint extension in VSCode
4. Install docker w/ compose
5. Connect to the DB and run the db.sql file
6. Test the routes with de .http files
```

