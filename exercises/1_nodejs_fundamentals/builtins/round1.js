const fs = require('node:fs');
const path = require('node:path');
const caeserShift = (input, shift) => {
  const result = Buffer.alloc(input.length);

  for (let i = 0; i < input.length; ++i) {
    const byte = input[i];

    if (byte >= 65 && byte <= 90) {
      // A-Z
      result[i] = ((((byte - 65 + shift) % 26) + 26) % 26) + 65;
      console.log(byte);
    } else if (byte >= 97 && byte <= 122) {
      // a - z
      result[i] = ((((byte - 97 + shift) % 26) + 26) % 26) + 97;
    } else {
      result[i] = byte;
    }
  }
  return result;
};

const inputPath = process.argv[2] || 'message.txt';

const shift = +process.argv[3] || 2;

const input = fs.readFileSync(inputPath);
const output = caeserShift(input, shift);

console.log(input.toString());
fs.writeFileSync('encoded.txt', output, 'utf-8');
console.log(output.toString());

