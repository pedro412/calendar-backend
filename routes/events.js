const { Router } = require('express');
const { check } = require('express-validator');
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events');
const { isDate } = require('../helpers/isDate');
const fieldsValidator = require('../middlewares/fields-validator');
const { validateToken } = require('../middlewares/validateToken');

const router = Router();

router.get('/', validateToken, getEvents);

router.post(
  '/',
  validateToken,
  [
    check('title', 'Event title is required')
      .not()
      .isEmpty()
      .isLength({ min: 3 }),
    check('start', 'Start date is required').custom(isDate),
    check('end', 'End date is required').custom(isDate),
  ],
  fieldsValidator,
  createEvent
);

router.put(
  '/:id',
  validateToken,
  [
    check('title', 'Event title is required')
      .not()
      .isEmpty()
      .isLength({ min: 3 }),
    check('start', 'Start date is required').custom(isDate),
    check('end', 'End date is required').custom(isDate),
  ],
  fieldsValidator,
  updateEvent
);

router.delete('/:id', validateToken, deleteEvent);

module.exports = router;
