const net = require('node:net');

require('dotenv').config({ quiet: true });
const clients = [];

const broadcast = (message, currentClient) => {
  for (const client of clients) {
    if (client !== currentClient) {
      client.write(message);
    }
  }
};

const server = net.createServer((socket) => {
  console.log('New client connected');

  console.log(socket.localAddress);
  console.log(`Client Ephemeral Port: ${socket.remotePort}`);
  clients.push(socket);

  socket.on('data', (data) => {
    const message = `> ${data.toString().trim()}`;
    broadcast(message, socket);
  });

  socket.on('close', () => {
    console.log('Client disconnected');
    const clientIndex = clients.indexOf(socket);

    if (clientIndex !== -1) clients.splice(clientIndex, 1);
  });

  socket.on('error', () => {});
});

const PORT = process.env.PORT;

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server is runing on port: ${PORT}`);
});
