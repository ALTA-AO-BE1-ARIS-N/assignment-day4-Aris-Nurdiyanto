const checkRole = (req, res, next) => {
    const role = req.query.role;
    if (role === 'admin') {
      next();
    } else {
      res.status(403).json({ message: 'Unauthorized' });
    }
  };
  
  module.exports = checkRole;