'use strict';

const { EVENT_TABLE, EventSchema } = require('./../model/event.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(EVENT_TABLE, EventSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(EVENT_TABLE);
  },
};
