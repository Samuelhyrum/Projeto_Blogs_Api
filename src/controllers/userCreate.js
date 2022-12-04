require('dotenv/config');
const jwt = require('jsonwebtoken');
const { UserService } = require('../services');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

module.exports = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
  
    const userEmail = await UserService.getByEmail(email);
  
    if (userEmail) {
      return res.status(409).json({ message: 'User already registered' }); 
    }
    const userCreate = await UserService.createUser({ displayName, email, password, image });

    if (!userCreate) throw Error;

    const newUser = await UserService.getByEmail(email);

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: { userId: newUser.id } }, secret, jwtConfig);

    res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};
