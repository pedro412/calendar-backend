const { Router } = require('express');
const { check } = require('express-validator');
const fieldsValidator = require('../middlewares/fields-validator');
const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { validateToken } = require('../middlewares/validateToken');

const router = Router();

router.post(
  '/',
  [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password should be at least 6 characters long').isLength(
      {
        min: 6,
      }
    ),
    fieldsValidator,
  ],
  loginUser
);

router.post(
  '/new',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password should be at least 6 characters long').isLength(
      {
        min: 6,
      }
    ),
    fieldsValidator,
  ],
  createUser
);

router.get('/renew', validateToken, renewToken);

module.exports = router;
