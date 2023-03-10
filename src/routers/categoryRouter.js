const express = require('express');
const categoryCreate = require('../controllers/categoryCreate');
const getCategories = require('../controllers/getCategories');
const validateCategory = require('../middlewares/validateCreateCategory');
const auth = require('../auth/validateJWT');

const router = express.Router();

router.post(
  '/',
  auth,
  validateCategory,
  categoryCreate,
);

router.get(
    '/',
    auth,
    getCategories,
);

module.exports = router;