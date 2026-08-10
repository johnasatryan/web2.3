const fs = require('node:fs');

// const fs = require('node:fs/promises');

// fs.readFile('file.txt', (err, chunk) => {

// })

// const p_fs = fs.readFile('file.txt');

// p_fs
//   .then((data) => {
//     console.log(data.toString());
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const someFunc = async () => {
//   try {
//     const data = await fs.readFile('file.txt', 'utf-8');

//     console.log(data);
//   } catch (err) {}
// };

// someFunc();

// flags -> r, r+, w, w+, a, wx

// fs.writeFileSync('file.txt', 'animast text', { flag: 'r' });

// const fd = fs.openSync('file.txt', 'w');

// fs.writeFileSync(fd, 'ano`ther text', 'ascii');

// fs.accessSync('fil2e.txt', fs.constants.F_OK);

// console.log(b);

// fs.unlinkSync('file.txt');

// const st = fs.createReadStream('file.txt', 'utf-8', {
//   highWaterMark: 128 * 1024,
// });

// st.on('data', (chunk) => {
//   console.log(chunk);
// });
// fs.createWriteStream