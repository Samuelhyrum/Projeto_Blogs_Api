const { Category } = require('../models');

const getByName = (name) => Category.findOne({ where: { name } });

const createCategory = ({ name }) => 
    Category.create({ name });

const getCategories = () => Category.findAll();

module.exports = {
    getByName,
    createCategory,
    getCategories,
};