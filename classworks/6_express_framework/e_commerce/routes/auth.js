const express = require('express');
const authService = require('../services/auth.service');

const router = express.Router();

const SECRET = process.env.SECRET || 'something';

router.post('/register', async (req, res, next) => {
  const { username, password } = req.body;

  try {
    res.status(201).json(await authService.register(username, password));
  } catch (err) {
    next(err);
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const users = await readData('users.json');

  const user = users.find((u) => u.username === username);

  if (!user || !bcrypt.compare(password, user.passwordHash)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
      role: user.role,
    },
    SECRET,
    { expiresIn: '2h' },
  );

  res.json({ token });
});

module.exports = router;
