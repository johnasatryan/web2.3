require('dotenv').config({ quiet: true });
const express = require('express');
const path = require('node:path');

const authRoutes = require('./routes/auth');
const productRotues = require('./routes/products');
const orderRoutes = require('./routes/orders');
const { readData } = require('./utils/fileDB');

const app = express();
const PORT = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// console.log(app.locals.settings);

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/products', productRotues);
app.use('/orders', orderRoutes);

app.get('/login', (req, res) => {
  // res.send('<h1> Hello world </h1>');
  // res.sendFile(path.join(__dirname, 'index.html'));
  res.render('login', { user: { name: 'James' } });
});

app.get('/products-page', async (req, res) => {
  const products = await readData('products.json');
  res.render('products', { products });
});

app.get('/orders-page', async (req, res) => {
  const orders = await readData('orders.json');
  res.render('orders', { orders });
});
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: 'Internal server error' });
});



app.listen(PORT, () => {
  console.log(`Server is runing on port: ${PORT}`);
});
