require('dotenv').config({ quiet: true });

module.exports = {
  port: process.env.PORT,
  jwt_secret: process.env.SECRET,
  db: {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    default_database: process.env.DB_DEFAULT_DATABASE,
  },
};
