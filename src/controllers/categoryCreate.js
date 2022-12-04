require('dotenv/config');
const { CategoryService } = require('../services');

module.exports = async (req, res) => {
  try {
    const { name } = req.body;
  
    const userCreate = await CategoryService.createCategory({ name });

    if (!userCreate) throw Error;

    const newCategory = await CategoryService.getByName(name);

    res.status(201).json(newCategory);
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};
