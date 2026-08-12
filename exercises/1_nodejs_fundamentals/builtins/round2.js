const path = require('node:path');

const sanitizeName = (name) => {
  const { name: base, ext } = path.parse(name);

  const cleanExt = ext.toLowerCase();
  const cleanBase = base
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return cleanBase + cleanExt;
};

const inputPath = process.argv[2];

console.log(sanitizeName(inputPath));
