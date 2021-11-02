const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('../config/swagger_output.json');

module.exports = async ({ app }) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
  return app
}
