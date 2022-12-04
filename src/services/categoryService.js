const { Category } = require('../models');

const getByName = (name) => Category.findOne({ where: { name } });

const createCategory = ({ name }) => 
    Category.create({ name });
    
// const getByUserId = async (id) => {
//   const user = await User.findOne({
//       where: { id },
//   });
//   const { password: _password, ...usersWithoutPass } = user.dataValues;
//   return usersWithoutPass;
// };

// const getUsers = async () => {
//     const users = await User.findAll();

//     const usersWithoutPassword = users.map(({ dataValues }) => {
//         const { password: _password, ...usersWithoutPass } = dataValues;

//         return usersWithoutPass;
//     });
//     return usersWithoutPassword;
// };

module.exports = {
    getByName,
    createCategory,
    // getByUserId,
    // getUsers,
};