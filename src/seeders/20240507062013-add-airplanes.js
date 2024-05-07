'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Airplanes', [
      {
        model: 'airbus340',
        capacity: 900,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model: 'boeing777',
        capacity: 450,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

/**
 * create new seeder file
 *
 * npx sequelize-cli seed:generate --name <add-airplanes>
 *
 * Run the seeds
 *
 * npx sequelize-cli db:seed:all
 */
