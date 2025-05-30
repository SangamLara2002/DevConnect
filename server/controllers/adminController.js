const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
};

exports.blockUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.isBlocked = true;
  await user.save();
  res.json({ message: `User ${user.name} has been blocked` });
};

exports.unblockUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.isBlocked = false;
  await user.save();
  res.json({ message: `User ${user.name} has been unblocked` });
};
