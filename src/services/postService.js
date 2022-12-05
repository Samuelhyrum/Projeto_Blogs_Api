const { BlogPost, PostCategory, sequelize, Category, User } = require('../models');

const getByTitle = (title) => BlogPost.findOne({ where: { title } });

const createPost = async ({ title, content, userId, categoryIds }) => {
    try {
      const result = await sequelize.transaction(async (t) => {
        const post = await BlogPost.create({
          title, content, userId,
        }, { transaction: t });
        const array = categoryIds.map((id) => (
            PostCategory.create({ postId: post.id, categoryId: id }, { transaction: t })
        ));
        await Promise.all(array);
        return post;
      });
      return result;    
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

const getAllPosts = () => BlogPost.findAll({
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } }],
});

module.exports = {
    getByTitle,
    createPost,
    getAllPosts,
};