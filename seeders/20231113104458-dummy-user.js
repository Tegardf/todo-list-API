'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users',[
      {
        nama: 'tegar',
        username: 'tegar',
        email: 'tegar@gmail.com',
        password: '123'
      },
      {
        nama: 'david',
        username: 'david',
        email: 'david@gmail.com',
        password: '098'
      },
      {
        nama: 'supri',
        username: 'supri12',
        email: 'supri@gmail.com',
        password: '378'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users',null,{})
  }
};
