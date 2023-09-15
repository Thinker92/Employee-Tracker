const express = require("express");
require('dotenv').config();
const mysql = require('mysql2');
const inquirer = require('inquirer');
const { viewAllDepartments } = require('./queries');

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
    console.log('Successfully connected to the database');
    mainMenu();

});

function mainMenu() {
    inquirer.prompt([
        {
            type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role',
                    'Exit'
                ],
        }
    ])
    .then((answers) => {
        switch (answers.action) {
            case 'View all departments':
                // Function to view all departments
                viewAllDepartments(connection);
                break;
            case 'View all roles':
                // Function to view all roles
                break;
            case 'View all employees':
                // Function to view all employees
                break;
            case 'Add a department':
                // Function to add a department
                break;
            case 'Add a role':
                // Function to add a role
                break;
            case 'Add an employee':
                // Function to add an employee
                break;
            case 'Update an employee role':
                // Function to update an employee role
                break;
            case 'Exit':
                connection.end();
                break;
        }
    });
}

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
    console.log(`Server is running at http://localhost:${port}`);
});