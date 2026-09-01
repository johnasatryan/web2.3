const express = require('express');
const app = express();
const path = require('node:path');

// function bodyParser(req, res, next) {
//   let body = '';

//   req.on('data', (chunk) => {
//     body += chunk;
//   });

//   req.on('end', () => {
//     req.body = JSON.parse(body.toString());
//     next();
//   });
// }

// app.use(bodyParser);

// app.post('/', (req, res) => {
//   const body = req.body;

//   res.send('...');
// });

// app.get('/users', (req, res) => {
//   const headers = req.headers;
//   res.send('/users get method');
// });

// app.get('/users/:id', (req, res) => {
//   res.send('inch vor ban');
// });

// function middleare1(req, res, next) {
//   console.log('First');
//   next();
// }

// function middleare2(req, res, next) {
//   console.log('Second');
//   next();
// }
// app.get('/users', middleare1, middleare2, (req, res) => {
//   console.log('third');
//   res.send('get users');
// });

app.use(express.json());

function validate(req, res, next) {
  const body = req.body;

  if (!body.email || !body.password) {
    return res.status(400).json({ error: 'Something went wrong' });
  }

  req.user = body;

  next();
}
app.post('/login', validate, (req, res, next) => {
  const user = req.user;
  throw new Error('hello error');
  res.json({ id: 1, email: 'Bob@example.com' });
});

app.use((err, req, res) => {
  console.log(err.message);
});

app.listen(3001, () => {
  console.log('Server is runing on port:3001');
});
