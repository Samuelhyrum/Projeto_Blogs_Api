// src/models/UserBook.js

module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory',
      {
        postId: { type: DataTypes.INTEGER, foreignKey: true },
        categoryId: { type: DataTypes.INTEGER, foreignKey: true },
      },
      {
        timestamps: false,
        tableName: 'posts_categories',
        underscored: true, 
      },
    );

    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
          as: 'categories',
          through: PostCategory,
          foreignKey: 'post_Id',
          otherKey: 'category_Id', 
        });
        models.Category.belongsToMany(models.BlogPost, {
            as: 'posts',
            through: PostCategory,
            foreignKey: 'category_Id', 
            otherKey: 'post_Id',
          });
        };
  
      return PostCategory;
  };