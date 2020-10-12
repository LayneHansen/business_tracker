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
