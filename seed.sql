DROP DATABASE IF EXISTS business_db;

CREATE DATABASE business_db;

USE business_db;

CREATE TABLE department (
	id INTEGER AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
	id INTEGER AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2),
    department_id INT(10) NOT NULL,
	
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES deparment(id)
);

CREATE TABLE employee (
	id INTEGER AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT(10) NOT NULL,
    manager_id INT(10),
    department_id INT(10) NOT NULL,
    
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
    
    );

INSERT INTO department (name)
VALUES ("Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES ("Director", 75000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id, department_id)
VALUES ("Mike", "Jones", 1, 1, 1);