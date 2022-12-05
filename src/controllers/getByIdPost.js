require('dotenv/config');
const { PostService } = require('../services');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await PostService.getByIdPost(id);

    if (!post) {
        return res.status(404).json({
        message: 'Post does not exist',
      }); 
}

    res.status(200).json(post);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao buscar usuários no banco', error: err.message });
  }
};