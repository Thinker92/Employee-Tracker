const inquirer = require('inquirer');

function mainMenu(connection) {
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
                viewAllRoles(connection);
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

function viewAllDepartments(connection) {
    connection.query('SELECT * FROM department', (err, results) => {
        if (err) throw err;
        console.table(results);
        mainMenu(connection);
    });
}

function viewAllRoles(connection) {
    connection.query('SELECT role.id, role.title, role.salary, department.name AS department FROM role JOIN department ON role.department_id = department.id', (err, results) => {
        if (err) throw err;
        console.table(results);
        mainMenu(connection);
    });
}

module.exports = { mainMenu, viewAllDepartments, viewAllRoles };
