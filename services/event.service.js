const boom = require('boom');
const { models } = require('../libs/sequelize');

class EventService {
  async create(data) {
    const newEvent = await models.Event.create(data);
    return newEvent;
  }

  async find() {
    const events = await models.Event.findAll();
    return events;
  }

  async findOne(id) {
    const event = await models.Event.findByPk(id);
    if (!event) {
      throw boom.notFound('Evento no encontrado');
    }
    return event;
  }

}

module.exports = EventService;
