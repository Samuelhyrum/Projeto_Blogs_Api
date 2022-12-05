require('dotenv/config');
const { PostService } = require('../services');

module.exports = async (_req, res) => {
  try {
    const posts = await PostService.getAllPosts();

    if (!posts) throw Error;

    res.status(200).json(posts);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao buscar usuários no banco', error: err.message });
  }
};