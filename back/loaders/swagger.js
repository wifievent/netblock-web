const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerOptions = require('../config/swagger');

const specs = swaggerJsdoc(swaggerOptions);

module.exports = async ({ app }) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  return app
}
