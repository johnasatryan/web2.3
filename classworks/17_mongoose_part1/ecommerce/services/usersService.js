const { User } = require('../models/User');

const reqister = async (username, password) => {
  const user = await User.create({ username, password });

  return { id: user.id, username: user.username, role: user.role };
};
