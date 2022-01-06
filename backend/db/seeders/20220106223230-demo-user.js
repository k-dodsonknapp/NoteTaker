'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'demo@moose.io',
        username: 'Demo-moose',
        hashedPassword: bcrypt.hashSync('moose'),
      },
      {
        email: 'demo@daphne.io',
        username: 'Demo-daphne',
        hashedPassword: bcrypt.hashSync('daphne'),
      },
      {
        email: 'demo@barry.io',
        username: 'Demo-barry',
        hashedPassword: bcrypt.hashSync('barry'),
      },
      {
        email: 'demo@alicia.io',
        username: 'Demo-alicia',
        hashedPassword: bcrypt.hashSync('alicia'),
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'Demo-moose', 'Demo-daphne', 'Demo-barry', 'Demo-alicia'] }
    }, {});
  }
};
