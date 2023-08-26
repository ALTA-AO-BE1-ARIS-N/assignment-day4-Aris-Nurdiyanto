const express = require('express');
const eventController = require('../controllers/eventController');
const checkRole = require('../middlewares/checkRole');

const router = express.Router();

router.post('/events', checkRole, (req, res) => {
  const { name, date } = req.body;
  const newEvent = eventController.addEvent(name, date);
  res.status(200).json(newEvent);
});

router.get('/events', (req, res) => {
  const events = eventController.getEvents();
  res.json(events);
});

router.delete('/events/:id', checkRole, (req, res) => {
  const eventId = parseInt(req.params.id);
  eventController.deleteEvent(eventId);
  res.status(200).send();
});

module.exports = router;