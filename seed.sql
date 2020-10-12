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

INSERT INTO department (name) VALUES ("Human Resources");
INSERT INTO department (name) VALUES ("Billing");
INSERT INTO department (name) VALUES ("Shipping");
INSERT INTO department (name) VALUES ("Receiving");

INSERT INTO role (title, salary, department_id) 
VALUES ("Manager", 75000, 1),
("Supervisor", 60000, 1),
("Associate", 45000, 1),
("Manager", 75000, 2),
("Supervisor", 60000, 2),
("Associate", 45000, 2),
("Manager", 75000, 3),
("Supervisor", 60000, 3),
("Associate", 45000, 3),
("Engineer", 75000, 3),
("Manager", 75000, 4),
("Supervisor", 60000, 4),
("Associate", 45000, 4),
("Engineer", 75000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Jones", 1, 1), 
("Bill", "Smith", 2, 1),
("Cleon", "Salmon", 3, 1),
("Marge", "Gundersen", 1, 2),
("Barry", "Badrinath", 2, 2),
("Moose", "Skowron", 3, 2),
("Billy", "Batts", 1, 3),
("Getu", "Thachoppa", 2, 3),
("Sally", "Strothers", 3, 3),
("Milly", "VanGogh", 4, 3),
("Willy", "Umerrymee", 1, 4),
("Barrien", "Bigmyke", 2, 4),
("Donald", "Bigly", 3, 4),
("Hillary", "Killery", 3, 4),
("Kummon", "Gitdaune", 4, 4)