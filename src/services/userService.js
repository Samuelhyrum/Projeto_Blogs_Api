const { User } = require('../models');

const getByEmail = (email) => User.findOne({ where: { email } });

const createUser = ({ displayName, email, password, image }) => 
    User.create({ displayName, email, password, image });
    
const getByUserId = (userId) => User.findByPk(userId);

const getUsers = async () => {
    const users = await User.findAll();

    const usersWithoutPassword = users.map(({ dataValues }) => {
        const { password: _password, ...usersWithoutPass } = dataValues;

        return usersWithoutPass;
    });
    return usersWithoutPassword;
};

module.exports = {
    getByEmail,
    createUser,
    getByUserId,
    getUsers,
};