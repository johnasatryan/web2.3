const express = require('express');
const { readData, writeData } = require('../utils/fileDB');
const { authenticate, authorize } = require('../middleware/auth');
const productService = require('../services/products.service');
const router = express.Router();

// GET /products?category=electronics&sort=price
router.get('/', async (req, res, next) => {
  try {
    {
      res.json(await productService.getAllProducts(req.query));
    }
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res) => {
  const products = await readData('productss.json');

  const productId = req.params.id;

  const product = products.find((p) => p.id === productId);
  if (!product) return res.status(404).json({ error: 'Product not found' });

  res.json(product);
});

router.post('/', authenticate, authorize('admin'), async (req, res) => {
  const { name, price, category, stock } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required' });
  }

  const products = await readData('products.json');

  const newProduct = {
    id: products.length ? products.length + 1 : 1,
    name,
    price,
    category: category || 'other',
    stock: stock ?? 0,
  };

  products.push(newProduct);
  writeData('products.json', products);

  res.status(201).json(newProduct);
});

router.put('/:id', authenticate, authorize('admin'), async (req, res) => {
  const products = await readData('products.json');
  const index = products.findIndex((p) => p.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Product not found' });

  products[index] = { ...products[index], ...req.body, id: products[index].id };
  await writeData('products.json', products);

  res.json(products[index]);
});

router.delete('/:id', authenticate, authorize('admin'), async (req, res) => {
  let products = await readData('products.json');
  const exists = products.some((p) => p.id === Number(req.params.id));
  if (!exists) return res.status(404).json({ error: 'Product not found' });

  products = products.filter((p) => p.id !== Number(req.params.id));
  await writeData('products.json', products);

  res.status(204).end();
});

module.exports = router;
