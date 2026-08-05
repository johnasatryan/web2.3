// // console.log(require);

// // require('./add.js');

// // console.log(module);

// console.log('hello from index.js');

// require('./add.js');

// const functions = require('./add.js');
// console.log(functions);

const audi = require('./superclass.js');

console.log(audi.name);

audi.name = 'BMW';

console.log(audi.name);

const bmw = require('./superclass.js');

console.log(bmw.name);
