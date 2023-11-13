'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Todos',[
      {
        user_id: 1,
        todo: 'belajar react',
        detail: 'aku akan belajar react dengan teman teman'
      },
      {
        user_id: 1,
        todo: 'belajar belajar express',
        detail: 'aku akan belajar express dengan teman teman'
      },
      {
        user_id: 2,
        todo: 'belajar motor',
        detail: 'aku akan belajar ditempat kursus'
      },
      {
        user_id: 2,
        todo: 'belajar mobil',
        detail: 'aku akan belajar dilapangan bola'
      },
      {
        user_id: 3,
        todo: 'makan',
      },
      {
        user_id: 3,
        todo: 'minum',
      },
      {
        user_id: 3,
        todo: 'nugas',
        detail: 'tugas elektronika, rangkaian logika, javascript'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Todos',null,{})
  }
};
