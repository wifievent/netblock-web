module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('users', [{
      id: 1,
      uid: 'test',
      pw: '493bc7ce8b49386fee42cb9e2c6acd05b3892590139f01d01ab489667fef216a589f1079605aab1be4c8a817a7232e58f714f4f224050e50f316b96d8680bdb2',
      salt: 'c9b40f8e616f477fabc59103bf19829581aaf850ab0453a33f311c10a73d7813cf5baf79bff69af3080cdfe56921880eff8f4099c3b41a3fb234c12407da4613',
      name: 'test',
      email: 'test@test.com',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
    return queryInterface.bulkInsert('templates', [{
      name: 'demo',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('users', null, {});
    return queryInterface.bulkDelete('templates', null, {});
  }
};