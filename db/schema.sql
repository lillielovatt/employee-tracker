DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS department;

CREATE TABLE department(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    department_id INTEGER,
    salary DECIMAL(6,0) NOT NULL,
    CONSTRAINT fk_dept FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER, 
    manager_id INTEGER DEFAULT NULL,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL,
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);


SELECT roles.id, roles.title, roles.salary, department.name AS department 
FROM department
LEFT JOIN roles ON department.id = roles.department_id;

SELECT first_name, last_name, title, d.name, salary
FROM employee AS e
INNER JOIN
roles AS r ON e.role_id = r.id
INNER JOIN 
department AS d ON r.department_id=d.id;





SELECT first_name, last_name, title, name, salary
    -> FROM employee AS e
    -> INNER JOIN
    -> roles AS r ON e.role_id = r.id
    -> LEFT JOIN
    -> department AS d ON r.department_id=d.id;
-- works but no dept or manager

SELECT employee.*, m.first_name AS manager, roles.title AS title, roles.salary
FROM roles
LEFT JOIN employee AS m ON m.manager_id = m.id
LEFT JOIN employee ON roles.id = employee.role_id;
-- gets title salary, but not dept or manager

SELECT e.id, e.first_name, e.last_name, m.first_name AS manager
FROM employee AS e
LEFT JOIN employee AS m ON e.manager_id = m.id
ORDER BY e.id;
-- only does the first names of the manager...