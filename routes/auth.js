const { Router } = require('express');
const { check } = require('express-validator');
const fieldsValidator = require('../middlewares/fields-validator');
const { createUser, loginUser, renewToken } = require('../controllers/auth');

const router = Router();

router.post(
  '/',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de 6 caracteres').isLength({
      min: 6,
    }),
    fieldsValidator,
  ],
  loginUser
);

router.post(
  '/new',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de 6 caracteres').isLength({
      min: 6,
    }),
    fieldsValidator,
  ],
  createUser
);

router.get('/renew', renewToken);

module.exports = router;
