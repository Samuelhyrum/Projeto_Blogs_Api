require('dotenv/config');
const { PostService } = require('../services');

module.exports = async (req, res) => {
    const { title, content } = req.body;
    const { id } = req.params;
  
    const postUptdated = await PostService.updatePost(id, { title, content });

    if (!postUptdated) {
        return res.status(404).json({
        message: 'Post does not updated',
      }); 
}
    const post = await PostService.getByIdPost(id);

    res.status(200).json(post);
};
