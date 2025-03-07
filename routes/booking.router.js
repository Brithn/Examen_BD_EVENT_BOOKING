const express = require('express');

const BookingService = require('../services/booking.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createBookingSchema,
  updateBookingSchema,
  getBookingSchema,
} = require('./../schemas/booking.schema');

const router = express.Router();
const service = new BookingService();

router.get('/', async (req, res, next) => {
  try {
    const bookings = await service.find();
    res.json(bookings);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getBookingSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const booking = await service.findOne(id);
      res.json(booking);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createBookingSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newBooking = await service.create(body);
      res.status(201).json(newBooking);
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
