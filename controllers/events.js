const { response } = require('express');
const Event = require('../models/Event');

const getEvents = async (req, res = response) => {
  const events = await Event.find().populate('user', 'name');

  res.json({
    ok: true,
    events,
  });
};

const createEvent = async (req, res = response) => {
  const event = new Event(req.body);

  try {
    event.user = req.uid;

    const savedEvent = await event.save();

    res.status(201).json({
      ok: true,
      message: 'Event saved correctly',
      event: savedEvent,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: 'DB save error',
    });
  }
};

const updateEvent = async (req, res = response) => {
  const eventId = req.params.id;

  try {
    const evento = await Event.findById(eventId);

    console.log(evento);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: 'Internal server error',
    });
  }

  res.json({
    ok: true,
    message: 'updateEvent',
    eventId,
  });
};

const deleteEvent = (req, res = response) => {
  const { uid, name } = req;
  const { id } = req.params;

  res.json({
    ok: true,
    message: 'deleteEvent',
    uid,
    name,
    eventId: id,
  });
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
