# nodejs-ca-express

A NodeJS common JS project, used to practice a little.

The context:

This repo represents a "Social Media" monolith app passing trough a "Strangler Fig" process. The user DB stills on the app but the user interactions has already become another component of the system.

// TODO, use sequilize as ORM

// TODO, best use of log correlationId 

## Code Overview

The code is based in a simple implementation of DDD + Clean Crchitecture + CQRS and other solid patters.

    .
    ├── ...
    ├── src                   
    │   ├── api                 
    |   │   ├── controllers     # API First aproch for expose the domain    
    |   │   ├── app.js          # Entry poin of the API
    |   │   ├── server.js       # Server general configuration
    │   ├── domain              
    |   │   ├── use-cases       # CA use cases bundled per folder
    |   │   ├── infrastructure  # Cross cutting things and wrappers
    |   │   ├── gateways        # CA external dependencies like DB and http services
    |   │   ├── events          # Domain events bundled per folder
    └── ...

## Frameworks and Libs

> * [Javascript](https://developer.mozilla.org/pt-BR/docs/web/javascript/guide/introduction) as the Programming Language
> * [Node JS 18.x](https://nodejs.dev/) as the Runtime
> * [Express](https://expressjs.com/) as the Web Server Framework
> * [Axios](https://axios-http.com/) as the HTTP integrator
> * [Postgress](https://node-postgres.com/) as the SQL Database
> * [Sequelize](https://sequelize.org/docs/v6/getting-started/) as the ORM
> * [Winston](https://github.com/winstonjs/winston) as the Logger
> * [Joi](https://joi.dev/) as the Schema Validator
> * [Jest](https://jestjs.io/) as the Test framework

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



![Alt text](https://miro.medium.com/v2/resize:fit:1600/1*0R0r00uF1RyRFxkxo3HVDg.png "Clean Arch")