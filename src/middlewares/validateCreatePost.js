// /src/middlewares/validatePassengerFields.js
module.exports = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
  
    if (!title) { return res.status(400).json({ message: 'Some required fields are missing' }); }

    if (!content) { return res.status(400).json({ message: 'Some required fields are missing' }); }

    if (!categoryIds) { 
      return res.status(400).json({ message: 'Some required fields are missing' }); 
}
  
    return next();
  };
