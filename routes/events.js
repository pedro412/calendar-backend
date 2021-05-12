const { Router } = require('express');
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events');
const { validateToken } = require('../middlewares/validateToken');

const router = Router();

router.get('/', validateToken, getEvents);

router.post('/', validateToken, createEvent);

router.put('/:id', validateToken, updateEvent);

router.delete('/:id', validateToken, deleteEvent);

module.exports = router;
