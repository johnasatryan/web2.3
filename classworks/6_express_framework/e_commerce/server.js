require('dotenv').config({ quiet: true });
const express = require('express');

const authRoutes = require('./routes/auth');
const productRotues = require('./routes/products');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/products', productRotues);

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: 'Internal server error' });
});
app.listen(PORT, () => {
  console.log(`Server is runing on port: ${PORT}`);
});
