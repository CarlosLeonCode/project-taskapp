require('dotenv').config();
const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
// app instance
const app = express();

// Activating JSON
app.use(express.json());

// Routing
routerApi(app);

// Middlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// Server
app.listen(process.env.APP_PORT, () => {
    console.log(`Server running at port ${process.env.APP_PORT}`)
})
