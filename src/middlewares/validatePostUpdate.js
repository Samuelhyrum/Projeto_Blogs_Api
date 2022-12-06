module.exports = (req, res, next) => {
    const { title, content } = req.body;
    const { id } = req.params;
    const { userId } = req.user.data;
  
    if (!title) { return res.status(400).json({ message: 'Some required fields are missing' }); }

    if (!content) { return res.status(400).json({ message: 'Some required fields are missing' }); }

    if (+id !== userId) {
        return res.status(401).json({ message: 'Unauthorized user' });
    }
  
    return next();
  };
