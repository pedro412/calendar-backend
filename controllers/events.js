const { response } = require('express');

const getEvents = async (req, res = response) => {
  const { uid, name } = req;

  res.json({
    ok: true,
    message: 'getEvents',
    uid,
    name,
  });
};

const createEvent = (req, res = response) => {
  const { uid, name } = req;

  res.json({
    ok: true,
    message: 'createEvent',
    uid,
    name,
  });
};

const updateEvent = (req, res = response) => {
  const { uid, name } = req;
  const { id } = req.params;

  res.json({
    ok: true,
    message: 'updateEvent',
    uid,
    name,
    eventId: id,
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
