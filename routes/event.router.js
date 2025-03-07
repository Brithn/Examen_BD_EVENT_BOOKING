const express = require('express');

const EventService = require('../services/event.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createEventSchema,
  updateEventSchema,
  getEventSchema,
} = require('../schemas/event.schema');

const router = express.Router();
const service = new EventService();

router.get('/', async (req, res, next) => {
  try {
    const events = await service.find();
    res.json(events);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getEventSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const event = await service.findOne(id);
      res.json(event);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createEventSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newEvent = await service.create(body);
      res.status(201).json(newEvent);
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  '/:id',
  validatorHandler(getEventSchema, 'params'),
  validatorHandler(updateEventSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const event = await service.update(id, body);
      res.json(event);
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  '/:id',
  validatorHandler(getEventSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
