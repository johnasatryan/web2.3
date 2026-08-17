const fs = require('node:fs');

setTimeout(() => {
  console.log('timeout');
}, 3);

fs.readFile(__filename, () => {
  console.log('fs reading');
});
