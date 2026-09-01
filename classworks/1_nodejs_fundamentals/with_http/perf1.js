const net = require('node:net');

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log(
      `Connection is performend port: ${socket.remotePort}: ${data.toString().split('/')[1]}`,
    );

    const responseBody = '<button> Hello world </button>';

    const response =
      'HTTP/1.1 200 OK\r\n' +
      'Content-type: text/html\r\n' +
      'Content-length: ' +
      Buffer.byteLength(responseBody) +
      '\r\n' +
      'Connection: keep-alive\r\n' +
      '\r\n' +
      responseBody;

    socket.write(response);
  });
});

server.listen(3001, '127.0.0.1', () => {
  console.log('Server is runing port: 3001');
});
