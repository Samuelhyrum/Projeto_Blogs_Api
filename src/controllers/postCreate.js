require('dotenv/config');
const { PostService } = require('../services');
const { CategoryService } = require('../services');

module.exports = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { userId } = req.user.data;

    const categoryId = await CategoryService.getCategories();

    const allCategories = categoryId.map((c) => (
        c.dataValues.id
    ));

    const validateId = categoryIds.every((id) => allCategories.includes(id));

    if (!validateId) {
       return res.status(400).json({ message: 'one or more "categoryIds" not found' }); 
    }
  
    const postCreate = await PostService.createPost({ title, content, userId, categoryIds });

    res.status(201).json(postCreate);
};
