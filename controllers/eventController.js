const Event = require('../models/event');

let events = [];

const addEvent = (name, date) => {
  const id = events.length + 1;
  const newEvent = new Event(id, name, date);
  events.push(newEvent);
  return newEvent;
};

const getEvents = () => {
  return events;
};

const deleteEvent = (eventId) => {
  events = events.filter(event => event.id !== eventId);
};

module.exports = {
  addEvent,
  getEvents,
  deleteEvent
};