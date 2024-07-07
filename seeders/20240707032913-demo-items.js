'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Items', [{
      name: 'Sample Item 1',
      description: 'This is a sample item description 1.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sample Item 2',
      description: 'This is a sample item description 2.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Test Item 1',
      description: 'Testing 123.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Test Item 1',
      description: 'Testing 456.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'New Item 1',
      description: 'This is a new item description 1.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'New Item 2',
      description: 'This is a new item description 2.',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {});
  }
};
