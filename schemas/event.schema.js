const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(50);
const description = Joi.string().min(10).max(255); // Se asume un límite de 255 caracteres
const date = Joi.date().iso();
const capacity = Joi.number().integer().min(1); // Se asume que la capacidad mínima es 1
const create_at = Joi.date().iso();
const update_at = Joi.date().iso();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createEventSchema = Joi.object({
  name: name.required(),
  description: description.required(),
  date: date.required(),
  capacity: capacity.required(),
  create_at: create_at.default(() => new Date().toISOString()), // Asigna la fecha actual por defecto
  update_at: update_at.default(() => new Date().toISOString()),
});

const updateEventSchema = Joi.object({
  name,
  description,
  date,
  capacity,
  update_at: update_at.default(() => new Date().toISOString()),
});

const getEventSchema = Joi.object({
  id: id.required(),
});

const queryEventSchema = Joi.object({
  limit,
  offset,
});

module.exports = {
  createEventSchema,
  updateEventSchema,
  getEventSchema,
  queryEventSchema,
};
