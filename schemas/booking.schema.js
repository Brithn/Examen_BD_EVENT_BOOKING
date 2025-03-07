const Joi = require('joi');

const id = Joi.number().integer();
const eventId = Joi.number().integer().required();
const userEmail = Joi.string().email().required();
const numTickets = Joi.number().integer().min(1).required();
const createdAt = Joi.date().iso();
const updateAt = Joi.date().iso();

const createBookingSchema = Joi.object({
  eventId: eventId.required(),
  userEmail: userEmail.required(),
  numTickets: numTickets.required(),
});

const updateBookingSchema = Joi.object({
  eventId: eventId,
  userEmail: userEmail,
  numTickets: numTickets,
});

const getBookingSchema = Joi.object({
  id: id.required(),
});

const queryBookingSchema = Joi.object({
  limit: Joi.number().integer(),
  offset: Joi.number().integer(),
});

module.exports = {
  createBookingSchema,
  updateBookingSchema,
  getBookingSchema,
  queryBookingSchema,
};
