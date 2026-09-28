const { getPool } = require('../data/db');
const { jwt_secret } = require('../config');
const AppError = require('../utils/AppError');
const pool = getPool();

const register = async (username, password) => {
  if (!username || !password) {
    throw new AppError(400, 'username and password are required');
  }

  const { rows: existing } = await pool.query(
    'SELECT id FROM users WHERE username=$1',
    [username],
  );

  if (existing[0]) {
    throw new AppError(409, 'Username already exist');
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const { rows } = await pool.query(
    `INSERT INTO users(username, password)
    VALUES($1, $2) RETURNING id, username
    `,
    [username, passwordHash],
  );
  return rows[0];
};

module.exports = { register };
