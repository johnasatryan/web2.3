const express = require('express');
const path = require('node:path');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: '*',
  }),
);

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './index.html'));
// });

function protected(req, res, next) {
  const token = req.headers['authorization'].split(' ')[1];
  if (!token) {
    return res.status(400).json({ error: 'Auth is required' });
  }

  try {
    const user = jwt.verify(token, 'some_secret');
    req.user = user.name;
    next();
  } catch (err) {
    res.status(401).send({
      message: err.message,
    });
  }
}

app.post('/login', (req, res) => {
  // validation, etc

  const user = req.body;
  const token = jwt.sign({ name: user.username }, 'some_secret', {
    expiresIn: '1m',
  });

  res.send({ token });
});

app.get('/me', protected, (req, res) => {
  res.send({ message: req.user });
});
app.listen(3001, () => {
  console.log('server is runing on port: 3001');
});
