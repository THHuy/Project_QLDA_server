const { Pool } = require("pg");
require("dotenv").config();
// Cấu hình kết nối
const pool = new Pool({
  host: process.env.DB_HOST, // Địa chỉ server PostgreSQL
  user: process.env.DB_USER, // Username mặc định của PostgreSQL (thay nếu cần)
  password: process.env.DB_PASSWORD, // Mật khẩu bạn đặt khi cài PostgreSQL
  database: process.env.DB_NAME, // Tên database
  port: 5432, // Cổng mặc định của PostgreSQL
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
