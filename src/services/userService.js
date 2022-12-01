const { User } = require('../models');

const getByEmail = (email) => User.findOne({ where: { email } });

module.exports = {
    getByEmail,
};