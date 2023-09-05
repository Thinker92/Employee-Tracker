const express = require("express");
require('dotenv').config();
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 3000;

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

app.get("/", (req, res) => {
    connection.query("SELECT 1 + 1 AS result", (err, results) => {
        if (err) {
            res.send("Error connecting to database");
        } else {
            res.send("Connected to database, result of 1 + 1 is: " + results[0].result);
        }
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});