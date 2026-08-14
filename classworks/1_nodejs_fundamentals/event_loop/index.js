const crypto = require('node:crypto');

const start = Date.now();
console.log('start');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');

// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');

// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// console.log('end');

// process.env.UV_THREADPOOL_SIZE = 1;

const MAX_SIZE = 16;
// for (let i = 0; i < MAX_SIZE; ++i) {
//   crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
//     console.log(`Hashing time: ${Date.now() - start}ms`);
//   });
// }

// for (let i = 0; i < MAX_SIZE; ++i) {
//   fetch('https://google.com', {
//     method: 'GET',
//   })
//     .then((data) => {
//       console.log(`Network request time: ${Date.now() - start}ms`);
//     })
//     .catch((err) => {
//       console.log(err.data);
//     });
// }

// console.log('end');

setTimeout(() => {
  process.nextTick(() => {});
  setImmediate(() => {});
});

const fs = require('node:fs/promises');

Promise.resolve().then(() => {
  console.log('Promise');
});
process.nextTick(() => {
  console.log('nextTick');
});
for (let i = 0; i < 1_000_000; ++i) {}
setTimeout(() => {
  console.log('timeout');
}, 100);

fs.readFile(__filename).then(() => {
  console.log('file reading...');
});

setImmediate(() => {
  console.log('setImmediate');
});
