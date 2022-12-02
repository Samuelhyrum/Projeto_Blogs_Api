const express = require('express');
const Login = require('../controllers/login');

const router = express.Router();

router.post(
  '/',
  Login,
);

module.exports = router;