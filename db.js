require("dotenv").config();
const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_HOST || 3306,
    user: process.env.DB_HOST || "root",
    password: process.env.DB_HOST || "root",
    database: process.env.DB_HOST || "gamehub_db"
});

module.exports = conexao;