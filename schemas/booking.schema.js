const Joi = require('joi');

const id = Joi.number().integer();
const event_id = Joi.number().integer().required();
const user_email = Joi.string().email().required();
const num_tickets = Joi.number().integer().min(1).required();
const createdAt = Joi.date().iso();
const updateAt = Joi.date().iso();

const createBookingSchema = Joi.object({
  event_id: event_id.required(),
  user_email: user_email.required(),
  num_tickets: num_tickets.required(),
});

const updateBookingSchema = Joi.object({
  event_id: event_id,
  user_email: user_email,
  num_tickets: num_tickets,
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
