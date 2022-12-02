const { User } = require('../models');

const getByEmail = (email) => User.findOne({ where: { email } });

const createUser = ({ displayName, email, password, image }) => 
    User.create({ displayName, email, password, image });
    
const getByUserId = (userId) => User.findByPk(userId);

module.exports = {
    getByEmail,
    createUser,
    getByUserId,
};