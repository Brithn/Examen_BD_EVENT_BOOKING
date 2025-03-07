'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('bookings', 'event_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'events', // Nombre de la tabla de eventos
        key: 'id', // Referencia a la columna `id` en la tabla de eventos
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('bookings', 'event_id');
  },
};
