const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Flight schedules and bookings');
});

router.post('/book', (req, res) => {
  console.log('Booking a flight');
  res.send('Flight booked successfully');
});

module.exports = router;