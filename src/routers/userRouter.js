const express = require('express');
const User = require('../controllers/user');
const ValidateUser = require('../middlewares/validateCreateUser');
const getUsers = require('../controllers/getUsers');
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

module.exports = router;