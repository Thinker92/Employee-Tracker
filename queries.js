function viewAllDepartments(connection) {
    connection.query('SELECT * FROM department', (err, results) => {
        if (err) throw err;
        console.table(results);
    });
}

module.exports = { viewAllDepartments };
