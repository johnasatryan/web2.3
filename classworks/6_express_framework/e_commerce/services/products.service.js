const { getPool } = require('../data/db');

const pool = getPool();

const getAllProducts = async ({ category, sort } = {}) => {
  const params = [];

  let sql = 'SELECT * FROM products';

  if (category) {
    params.push(category);
    sql += ` WHERE category = $${params.length}`;
  }

  if (sort === 'price') {
    sql += ' Order BY price';
  }

  const { rows } = await pool.query(sql, params);
  return rows;
};

module.exports = { getAllProducts };
