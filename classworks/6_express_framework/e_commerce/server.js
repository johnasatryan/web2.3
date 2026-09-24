require('dotenv').config({ quiet: true });
const express = require('express');
const path = require('node:path');
const { Client } = require('pg');
const { Pool } = require('pg');

// const authRoutes = require('./routes/auth');
// const productRotues = require('./routes/products');
// const orderRoutes = require('./routes/orders');
// const { readData } = require('./utils/fileDB');

const app = express();
const PORT = process.env.PORT;

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // console.log(app.locals.settings);

// app.use(express.json());
// app.use('/auth', authRoutes);
// app.use('/products', productRotues);
// app.use('/orders', orderRoutes);

// app.get('/login', (req, res) => {
//   // res.send('<h1> Hello world </h1>');
//   // res.sendFile(path.join(__dirname, 'index.html'));
//   res.render('login', { user: { name: 'James' } });
// });

// app.get('/products-page', async (req, res) => {
//   const products = await readData('products.json');
//   res.render('products', { products });
// });

// app.get('/orders-page', async (req, res) => {
//   const orders = await readData('orders.json');
//   res.render('orders', { orders });
// });

// const client = new Client({
//   database: 'practice',
//   user: 'jon',
//   password: 'postgres',
//   host: 'localhost',
//   port: 5432,
// });
// const pool = new Pool({
//   database: 'practicce',
//   user: 'jon',
//   password: 'postgres',
//   host: 'localhost',
//   port: 5432,
// });

// async function main() {
//   await client.connect();
//   const result = await client.query('SELECT * FROM products');
//   console.log(result.rows);
//   client.end();
// }

async function existDatabase() {
  const client = new Clent({
    database: 'postgres',
    user: 'jon',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
  });

  try {
    await client.connect();
    const result = await client.query(
      'SELECT 1 FROM pg_database WHERE datname=$1',
      [process.env.DB_NAME],
    );

    if (result.rows.length === 0) {
      await client.query('CREATE DATABASE practicce');
    }
    client.end();
  } catch (err) {
    console.log(err.message);
  }
}

async function main() {
  const result = await pool.query('SELECT * FROM products');
  console.log(result.rows);
}
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server is runing on port: ${PORT}`);
});

// main();
