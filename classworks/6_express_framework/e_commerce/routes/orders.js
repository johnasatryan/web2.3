const express = require('express');
const { readData, writeData } = require('../utils/fileDB');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// POST /orders - body : {items: [productId, quantity]}
router.post('/', authenticate, async (req, res) => {
  const { items } = req.body;

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Items must be a non-empty array' });
  }

  const products = await readData('products.json');

  let total = 0;
  const orderItems = [];

  for (const item of items) {
    const product = products.find((p) => p.id === item.productId);

    if (!product) {
      return res
        .status(400)
        .json({ error: `Product ${item.productId} not found` });
    }

    if (product.stock < item.quantity) {
      return res.status(400).json({ error: 'Not enoughg stock for product' });
    }

    total += product.price * item.quantity;

    orderItems.push({
      productId: product.id,
      name: product.name,
      quantity: item.quantity,
      price: product.price,
    });
  }

  items.forEach((item) => {
    const p = products.find((p) => p.id === item.productId);
    p.stock -= item.quantity;
  });

  await writeData('products.json', products);

  const orders = await readData('orders.json');
  const newOrder = {
    id: orders.length + 1,
    userId: req.user.id,
    items: orderItems,
    total,
    createdAt: new Date().toString(),
  };

  orders.push(newOrder);

  await writeData('orders.json', orders);

  res.status(201).json(newOrder);
});

/* 
[{
  "id": 1,
  "userId": 2.
  "items": [{
      "productId": 1,
      "name": "Wireless keyboard",
      quantity: 2
      price: 19.99
  }]
  
  "items": [{productId: 1}, {productId: 2}]
}]
*/

module.exports = router;
