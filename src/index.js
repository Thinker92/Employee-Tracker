require('dotenv').config({ path: '../.env' });
const mysql = require('mysql2');

// Connect to MySQL database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

console.log(process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASS, process.env.DB_NAME, process.env.DB_PORT);

connection.connect(err => {
    if (err) {
        console.error('An error occurred while connecting to the database:', err.stack);
        return;
    }
    console.log('Successfully connected to the database')
});

