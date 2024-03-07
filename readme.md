# how to set up a ussd app using node.js, express.js and mongoDB on linux wsl

## 0. Set up the environment:
- update and upgrade your machine and packages

**update** `sudo apt update`

**upgrade** `sudo apt upgrade`

**update node.js** `npm install -g npm@latest`

## 1. Project Setup:
- First, create a new directory for your project and initialize a Node.js project:

`mkdir startup-app`

`cd startup-app`

`npm init -y`

- Install necessary dependencies:

`npm install express mongoose body-parser morgan`

## 2. Create Express Server:

- Create a file named server.js

## 3. Define Model and Routes:

- Create a directory named `models` for your MongoDB models and another directory named `routes` for your Express routes.

- Inside the models directory, create a file named `[name of the app]Model.js`

- Inside the routes directory, create a file named `[name of the app]Routes.js`

## 4. Mount Routes in Express Server:

- Modify server.js to use the routes:
```
// server.js
const startupRoutes = require('./routes/startupRoutes');

app.use('/startups', startupRoutes);

```
## 5. Run the Application:

- Start your MongoDB server (if not already running):
- Then start your Node.js server:

`node server.js`