const express = require("express");
const route = require('./src/routes');
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

const app = express()
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
});

app.use(route);

app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );

module.exports = app;

