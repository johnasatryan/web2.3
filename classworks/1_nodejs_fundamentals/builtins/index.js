// // // // // console.log(path.extname('file.txt'));
// // // // // console.log(path.parse(__filename));
// // // // // console.log(
// // // // //   path.format({
// // // // //     root: '/',
// // // // //     dir: '/Users/jon/Workspace/web2.3/classworks/1_nodejs_fundamentals/builtins',
// // // // //   }),
// // // // // );

// // // // // console.log(path.normalize('./file.txt'));

// // // // // console.log(path.resolve('folder1', 'folder2', 'index.js'));
// // // // console.log(path.join(__dirname, 'folder1', 'folder2', 'index.js'));

// // // const path = require('path');

// // // const fs = require('node:fs');

// // // // fs.writeFileSync('file.txt', 'another text', {
// // // //   flag: 'a',
// // // // });
// // // // const res = fs.readFileSync('file.txt', 'utf-8');

// // // // console.log(res);

// // // fs.readFile('file1.txt', (err, data) => {
// // //   if (err) {
// // //     console.log(err);
// // //     return;
// // //   }

// // //   console.log(data.toString());
// // // });

// // const EventEmitter = require('node:events');

// // const emitter = new EventEmitter();

// // emitter.on('zangy_tal', () => {
// //   console.log('dzin dzin');
// // });

// // emitter.on('zangy_tal', () => {
// //   console.log('heto');
// // });

// // emitter.emit('zangy_tal');

// // console.log(emitter.listeners('zangy_tal'));

// const net = require('node:net');

// const server = net.createServer((socket) => {
//   console.log(socket.remoteAddress);
//   socket.on('data', (chunk) => {
//     console.log(chunk);
//   });

//   socket.on('end', () => {
//     console.log('Client disconnected');
//   });
// });

// server.listen(3001, '127.0.0.1', () => {
//   console.log('Server is running');
// });

// const os = require('node:os');

// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.cpus());
// console.log(os.arch());
// console.log(os.platform());

// const http = require('node:http');

// const server = http.createServer((req, res) => {
//   if (req.method === 'GET') {
//     res.end()
//   }
// });

// server.listen(3001, () => {
//   console.log('Server is runing on port:3001');
// });

// const crypto = require('node:crypto');

// const hash = crypto.pbkdf2Sync('password', 'salt', 100, 100, 'sha256');

// console.log(hash.toJSON().data.toString());


