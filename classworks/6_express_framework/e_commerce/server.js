const express = require('express');
const { port } = require('./config');
const { existDatabase, getPool } = require('./data/db');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/products');
const errorHnadler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use('/auth', authRouter);
app.use('/products', productRouter);

app.use(errorHnadler);

existDatabase().then(() => {
  getPool();
  app.listen(port, () => {
    console.log(`Server is runing on port: ${port}`);
  });
});
