const boom = require('boom');
const { models } = require('../libs/sequelize');

class BookingService {
  async create(data) {
    const { event_id, user_email, num_tickets } = data;

    // Verificar si los campos requeridos están presentes
    if (!event_id || !user_email || !num_tickets) {
      throw boom.badRequest('Faltan campos requeridos: event_id, user_email, num_tickets');
    }

    const newBooking = await models.Booking.create(data);
    return newBooking;
  }

  async find() {
    const bookings = await models.Booking.findAll();
    return bookings;
  }

  async findOne(id) {
    const booking = await models.Booking.findByPk(id);
    if (!booking) {
      throw boom.notFound('Reserva no encontrada');
    }
    return booking;
  }

  async update(id, changes) {
    const booking = await this.findOne(id);
    await booking.update({
      ...changes,
      update_at: new Date(), // Se actualiza el campo `update_at`
    });
    return booking;
  }

  async delete(id) {
    const booking = await this.findOne(id);
    await booking.destroy();
    return { id };
  }
}

module.exports = BookingService;
