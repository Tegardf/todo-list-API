'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Todos',[
      {
        user_id: 4,
        todo: 'belajar react',
        detail: 'aku akan belajar react dengan teman teman'
      },
      {
        user_id: 4,
        todo: 'belajar belajar express',
        detail: 'aku akan belajar express dengan teman teman'
      },
      {
        user_id: 4,
        todo: 'belajar motor',
        detail: 'aku akan belajar ditempat kursus'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
