const http = require('node:http');

const server = http.createServer((req, res) => {
  console.log(req.method);
  res.end('<h1> Hello browser </h1>');
});

server.listen(3001, () => {
  console.log('Server is runing on port: 3001');
});
