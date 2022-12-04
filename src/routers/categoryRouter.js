const express = require('express');
const categoryCreate = require('../controllers/categoryCreate');
const validateCategory = require('../middlewares/validateCreateCategory');
const auth = require('../auth/validateJWT');

const router = express.Router();

router.post(
  '/',
  auth,
  validateCategory,
  categoryCreate,
);

// router.get(
//     '/',
//     auth,
//     getUsers,
// );

// router.get(
//     '/:id',
//     auth,
//     getByIdUser,
// );

module.exports = router;