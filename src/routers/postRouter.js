const express = require('express');
const validatePost = require('../middlewares/validateCreatePost');
const auth = require('../auth/validateJWT');
const postCreate = require('../controllers/postCreate');
const getAllPosts = require('../controllers/getAllPosts');

const router = express.Router();

router.post(
  '/',
  auth,
  validatePost,
  postCreate,
);

router.get(
  '/',
  auth,
  getAllPosts,
);

module.exports = router;