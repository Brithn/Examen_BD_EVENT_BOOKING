const express = require('express');
const eventRouter = require('./event.router');
const bookingsRouter = require('./booking.router'); // Importa el router de bookings

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/eventos', eventRouter);
  router.use('/bookings', bookingsRouter); 
}

module.exports = routerApi;
