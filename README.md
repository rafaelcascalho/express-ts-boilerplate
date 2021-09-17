# Express TS Boilerplate

## Prerequisites

You must have installed [nodejs - lts version](https://nodejs.org/en/).

## Setup and run

1. To install locally just install the dependencies with the command below

```sh
$ npm i
```

2. Then, create a `.env` file in the root of the project with all the variables required in the `.env.example`.

3. To run locally in the dev env just run the command below

```sh
$ npm run start:dev
```

## To run tests

To run tests just create a `.env.test` file (same as the `.env`). And run the command below

```sh
$ npm test
```

After that, there will be a `logs` folder in the root of the project with possible errors, and you can check if the
service is running by hitting the url `http://localhost:3000/api/v1/health`.
