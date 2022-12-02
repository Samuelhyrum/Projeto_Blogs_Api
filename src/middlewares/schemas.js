const Joi = require('joi');

const validateEmail = Joi.string().email();

const validateName = Joi.string().min(8);

const validatePassword = Joi.string().min(6);

module.exports = {
    validateEmail,
    validateName,
    validatePassword,
};