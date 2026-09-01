const express = require('express');

const app = express();

app.get('/contacts', (req, res) => {
  res.status(400).json({ name: 'bob', age: 12 });
});

app.listen(3001, () => {
  console.log('server is runing...');
});
