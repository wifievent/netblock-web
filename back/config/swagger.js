const definition = {
  openapi: '3.0.0',
  info: {
    title: 'WiFi Event API',
    version: '0.0.0',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'local test',
    }
  ]
}

const options = {
  definition,
  apis: [],
};

module.exports = options;