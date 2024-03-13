require('dotenv').config();
const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
// app instance
const app = express();

// Middlewares
app.use(express.json());
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// Routing
routerApi(app);

// Server
app.listen(process.env.APP_PORT, () => {
  console.log(`Server running at port ${process.env.APP_PORT}`)
})
