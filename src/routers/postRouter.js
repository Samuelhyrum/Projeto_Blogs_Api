const express = require('express');
const validatePost = require('../middlewares/validateCreatePost');
const auth = require('../auth/validateJWT');
const postCreate = require('../controllers/postCreate');

const router = express.Router();

router.post(
  '/',
  auth,
  validatePost,
  postCreate,
);

module.exports = router;