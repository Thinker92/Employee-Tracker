-- Insert into department
INSERT INTO department (name) VALUES
('Engineering'),
('HR'),
('Sales');

-- Insert into role
INSERT INTO role (title, salary, department_id) VALUES
('Software Engineer', 90000, 1),
('HR Manager', 80000, 2),
('Sales Associate', 70000, 3);

-- Insert into employee
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Emily', 'Brown', 3, 1);