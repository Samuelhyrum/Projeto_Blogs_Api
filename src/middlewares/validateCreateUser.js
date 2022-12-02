// /src/middlewares/validatePassengerFields.js
const schemas = require('./schemas');

module.exports = (req, res, next) => {
    const { displayName, email, password } = req.body;
    
    const nameCheck = schemas.validateName.validate(displayName);

    if (nameCheck.error) {
        return res.status(400).json({ 
        message: '"displayName" length must be at least 8 characters long' }); 
}

    const emailCheck = schemas.validateEmail.validate(email);

    if (emailCheck.error) return res.status(400).json({ message: '"email" must be a valid email' });

    const passwordCheck = schemas.validatePassword.validate(password);

    if (passwordCheck.error) { 
        return res.status(400).json({ 
        message: '"password" length must be at least 6 characters long' }); 
}

    return next();
  };

//   {
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6M30sImlhdCI6MTY2OTk5NzExOCwiZXhwIjoxNjcwNjAxOTE4fQ.KszQPyAHInbQniciTj3zqDUmw9uSQoinoR-CZJu9SAc"
//   }