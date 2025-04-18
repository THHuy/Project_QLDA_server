const { Pool } = require("pg");
require("dotenv").config({
  path: process.env.NODE_ENV === "production" ? ".env" : ".env.local",
});
// Cấu hình kết nối
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
});

// Kiểm tra kết nối
pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error connecting to PostgreSQL:", err.stack);
  }
  console.log("Connected to PostgreSQL database");
  release(); // Giải phóng client sau khi kiểm tra
});

module.exports = pool;
