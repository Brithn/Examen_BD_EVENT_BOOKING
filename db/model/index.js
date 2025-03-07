const { Event, EventSchema } = require('./event.model');
const { Booking, BookingSchema } = require('./booking.model');

function initModels(sequelize) {
  // Inicializa los modelos
  Event.init(EventSchema, Event.config(sequelize));
  Booking.init(BookingSchema, Booking.config(sequelize));

  // Asocia los modelos
  Event.associate(sequelize.models);
  Booking.associate(sequelize.models);
}

module.exports = initModels;
