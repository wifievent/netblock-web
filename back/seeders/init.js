require('dotenv').config();

module.exports = {
  up: (queryInterface, Sequelize) => {
    if (process.env.NODE_ENV === 'development') {
      queryInterface.bulkInsert('users', [{
        id: 2,
        uid: 'test',
        pw: '493bc7ce8b49386fee42cb9e2c6acd05b3892590139f01d01ab489667fef216a589f1079605aab1be4c8a817a7232e58f714f4f224050e50f316b96d8680bdb2',
        salt: 'c9b40f8e616f477fabc59103bf19829581aaf850ab0453a33f311c10a73d7813cf5baf79bff69af3080cdfe56921880eff8f4099c3b41a3fb234c12407da4613',
        name: 'test',
        email: 'test@test.com',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }]);
    }
    queryInterface.bulkInsert('users', [{
      id: 1,
      uid: 'admin',
      pw: '352ac48b6fa0e559165c59a73ba927c3627946285505c9a2c1ead67d4d5ea4e520cc959048d1aba67e316773975877d57f8a45b2865e6c909dfabb74b0eb8568',
      salt: 'ab7422234db53ed94d971d1caa38766881274242b0fc42a9b81524dd59fdd4595454ece7ab6df4b21bfb45b39f6f29bee00c6b8a8423bb68efe90e9c220dd2bc',
      name: 'WiFiEvent',
      email: 'wifievent21@gmail.com',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
    queryInterface.bulkInsert('templates', [{
      id: 1,
      name: 'background',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'top',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      name: 'bottom',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
    queryInterface.bulkInsert('pages', [{
      id: 1,
      name: 'WiFiEvent Captive Portal',
      title: 'WiFiEvent Captive Portal',
      content: 'Hello. This is demo page. You can configure page title, content, image in your \'MyPage\'.',
      pid: 'demo',
      public: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1,
      templateId: 3,
    }]);
    return queryInterface.bulkInsert('files', [{
      id: 1,
      src: 'wf_logo.png',
      size: 15616,
      sid: 'wf_logo',
      filename: 'wf_logo.png',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1,
      pageId: 1,
    }]);
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('users', null, {});
    queryInterface.bulkDelete('templates', null, {});
    queryInterface.bulkDelete('files', null, {});
    return queryInterface.bulkDelete('pages', null, {});
  }
};