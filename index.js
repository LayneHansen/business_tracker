// require files

const mysql = require("mysql");
const inquirer = require("inquirer");
const env = require("dotenv").config();
const consoleTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.password,
    database: "business_db"
});

connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});

// base run function
function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices:
                [
                    "View Department",
                    "Add Department",
                    "View Employee",
                    "Add Employee",
                    "Update Employee",
                    "View Role",
                    "Add Role"
                ]
        })
        .then(function (data) {
            switch (data.action) {
                case "View Department":
                    viewDepartment();
                    break;

                case "Add Department":
                    addDepartment();
                    break;

                case "View Employee":
                    viewEmployee();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Update Employee":
                    updateEmployee();
                    break;

                case "View Role":
                    viewRole();
                    break;

                case "Add Role":
                    addRole();
                    break;
            }
        })
};


// function to see current departments
function viewDepartment() {
    var query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    });
};

function addDepartment() {
    inquirer
        .prompt({
            name: "department_id",
            type: "input",
            message: "What is the name of the new department?"
        })
        .then(function (data) {
            connection.query("INSERT INTO department SET ?",
                {
                    name: data.department_id
                },
                function (err) {
                    if (err) throw err;
                    console.log("The department was created successfully!");
                    runSearch();
                })
        })
};

// view all employees
function viewEmployee() {
    var query = "SELECT * FROM employee AS e LEFT JOIN role as r ON e.role_id = r.id";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    })
};

// add a new employee
function addEmployee() {
    inquirer
        .prompt([
            {
                name: "first_name",
                type: "input",
                message: "What is the employee's first name?"
            },
            {
                name: "last_name",
                type: "input",
                message: "What is the employee's last name?"
            },
            {
                name: "role_id",
                type: "input",
                message: "What is the employee's role? 1) Manager 2) Supervisor 3) Associate 4) Engineer:",
                // choices: 
                // [
                //     "Manager",
                //     "Supervisor",
                //     "Associate",
                //     "Engineer"
                // ]
            },
            {
                name: "manager_id",
                type: "input",
                message: "Who is the employee's manager? [Select Number] 1) Mike Jones 2) Marge Gundersen 3) Billy Batts 4) Willy Umerrymee:",
            },
        ])
        .then(function (data) {
            // when finished prompting, insert a new item into the db with that info
            connection.query("INSERT INTO employee SET ?",
                {
                    first_name: data.first_name,
                    last_name: data.last_name,
                    role_id: data.role_id,
                    manager_id: data.manager_id,
                },
                function (err) {
                    if (err) throw err;
                    console.log("The employee was created successfully!");
                    runSearch();
                });
        });
};

// update employees roles
function updateEmployee() {
    inquirer
        .prompt ({
            name: "updateEmployee",
            type: "list"
            choices:
                [
                    ""
                ]
        })
    }

// view the available roles
function viewRole() {
    var query = "SELECT * FROM role";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    })
};

// add a new role to the company as it expands
function addRole() {
    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: "What is the name of the new role?"
            },
            {
                name: "salary",
                type: "input",
                message: "What is the salary of the new role?"
            },
            {
                name: "department_id",
                type: "input",
                message: "Which department is the new role in? 1) Human Resources 2) Billing 3) Shipping 4) Receiving [Select Number]",
            },
        ])
        .then(function (data) {
            connection.query("INSERT INTO role SET ?",
                {
                    title: data.title,
                    salary: data.salary,
                    department_id: data.department_id
                },
                function (err) {
                    if (err) throw err;
                    console.log("The role was created successfully!");
                    runSearch();
                })
        })
};






