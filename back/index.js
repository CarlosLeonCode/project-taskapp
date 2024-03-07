require('dotenv').config();
const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();

app.use(express.json());
routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(process.env.APP_PORT, () => {
    console.log(`Server running at port ${process.env.APP_PORT}`)
})
