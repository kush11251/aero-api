const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const flightController = require('./controllers/flightController');

app.use('/flights', flightController);

app.listen(port, () => {
  console.log(`Aero API listening on port ${port}`);
});