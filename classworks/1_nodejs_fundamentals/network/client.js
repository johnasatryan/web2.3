const net = require('node:net');

require('dotenv').config({ quiet: true });
const socket = net.createConnection(process.env.PORT, '127.0.0.1', () => {
  console.log('Connected to server');
});

socket.on('data', (data) => {
  console.log(data.toString().trim());
});

socket.on('close', () => {
  console.log('Server disconnected');
});

socket.on('error', (err) => {
  console.log(err.message);
});

// process.stdin.on('data', (data) => {
//   socket.write(data);
// });

process.stdin.pipe(socket);
