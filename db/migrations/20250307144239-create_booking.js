'use strict';
const { EVENT_TABLE, EventSchema } = require('./../model/event.model');
const { BOOKING_TABLE, BookingSchema } = require('./../model/booking.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(EVENT_TABLE, EventSchema);
    await queryInterface.createTable(BOOKING_TABLE, BookingSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(EVENT_TABLE);
    await queryInterface.dropTable(BOOKING_TABLE);
  },
};

