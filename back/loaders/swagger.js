const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'Test API',
      version: '1.0.0',
      description: 'Test API with express',
    },
    host: 'localhost:3000',
    basePath: '/',
  },
  apis: ['./routes/*.js', './swagger/*']
};

const specs = swaggerJsdoc(options);

module.exports = async ({ app }) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  return app
}

