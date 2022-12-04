const express = require('express');
const User = require('../controllers/userCreate');
const ValidateUser = require('../middlewares/validateCreateUser');
const getUsers = require('../controllers/getUsers');
const getByIdUser = require('../controllers/getByIdUser');
const auth = require('../auth/validateJWT');

const router = express.Router();

router.post(
  '/',
  ValidateUser,
  User,
);

router.get(
    '/',
    auth,
    getUsers,
);

router.get(
    '/:id',
    auth,
    getByIdUser,
);

module.exports = router;