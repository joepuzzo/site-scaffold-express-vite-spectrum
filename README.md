# Express + Vite Starter

This is a starting point for creating a react app via vite and express

## Layout

```bash
# Directory for all the react static site content developed with vite
src/clint/
# Directory for all the node/express server content
src/server/
```

## Getting Started

```bash
# Install any deps
$ npm i

# Create .env file and add any env variables
touch .env

# Start up the node server and webpack dev server
$ npm run start:dev
```

Now go to localhost:3000 and you will see the app!

## Notes

```bash
$ npm run start:dev
```

The above command will run two commands

1.

```bash
$ npm run dev
```

2.

```bash
$ npm run server:local
```

The first will run a vite dev server ( development server with hot reloading ).

The second will start up the express-app/node-serve with the env variable `NODE_ENV=development`

## Build / Deploy

This project contains a Dockerfile that can be built with:

```bash
npm run build:docker
```

To run it locally simply run

```bash
npm run run:docker
```

**Note** before you run these change those scripts to use the name of your app

Example:

Change this:

```json
"build:docker": "docker build -t your-app-name .",
```

To this:

```json
"build:docker": "docker build -t my-awesome-app .",
```
