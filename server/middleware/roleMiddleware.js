const User = require('../models/User');

const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. Admins only.' });
  }
  next();
};

const isNotBlocked = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (user.isBlocked) {
    return res.status(403).json({ message: 'Account is blocked. Contact admin.' });
  }
  next();
};

module.exports = { isAdmin, isNotBlocked };
