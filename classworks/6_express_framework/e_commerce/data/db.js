const { Client, Pool } = require('pg');
const { db } = require('../config');

const existDatabase = async () => {
  const client = new Client({ ...db, database: db.default_database });

  try {
    await client.connect();
    const result = await client.query(
      'SELECT 1 FROM pg_database WHERE datname =$1',
      [db.database],
    );
    if (result.rows.length === 0) {
      console.log(`Database ${db.database} does not exist. Creating...`);
      await client.query(`CREATE DATABASE ${db.database}`);
      console.log(`Database ${db.database} created.`);
    }
  } finally {
    await client.end();
  }
};

let pool = null;

const getPool = () => {
  if (!pool) {
    pool = new Pool({ ...db, database: db.database });
  }

  return pool;
};

module.exports = { existDatabase, getPool };
