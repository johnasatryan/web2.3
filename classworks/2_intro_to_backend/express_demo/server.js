// Authentication vs Authorization

const express = require('express');

const app = express();

function auth(req, res, next) {
  const authKey = req.headers['chlp'];
  if (!authKey) {
    return res.status(401).send('Authentication required');
  }
  console.log(authKey);

  next();
}

app.get('/protected', auth, (req, res) => {
  res.send("Yes, I',m protected...");
});

app.listen(3001);
