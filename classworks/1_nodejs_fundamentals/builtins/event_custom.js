const EventEmitter = require('node:events');

class Shop extends EventEmitter {
  constructor() {
    super();
    this.orderCount = 0;
  }

  order(order, category) {
    this.emit(order, category);
    this.orderCount++;
  }

  displayOrderCount() {
    console.log(`Count of orders: ${this.orderCount}`);
  }
}

module.exports = Shop;
