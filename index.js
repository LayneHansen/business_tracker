// require files

const mysql = require("mysql");
const inquirer = require("inquirer");
const env = require("dotenv").config();
// const consoleTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.password,
    database: "business_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    businessTrack();
  });

// inquirer function

function businessTrack() {
    inquirer    
        .prompt ({
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
                    "View Roles",
                    "Add Role"
                ] 
        })
        .then (function(response) {
            switch (response.action) {
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
                addDepartment();
                break;
            
            case "Add Role":
                addRole();
                break;
            }
        })
}    
    // function for when department doesn't exist
    // function to see current departments
    
    function viewDepartment() {
        inquirer    
            .prompt ({
                name: "viewDepartment",
                type: "list"
                choices: 
                    [
                        ""
                    ]
            })
        }
    
    function addDepartment() {
        inquirer    
            .prompt ({
                name: "addDepartment",
                type: "list"
                choices: 
                    [
                        ""
                    ]
            })
        }
    
    function viewEmployee() {
        inquirer    
            .prompt ({
                name: "viewEmployee",
                type: "list"
                choices: 
                    [
                        ""
                    ]
            })
        }
    
    function addEmployee() {
        inquirer    
            .prompt ({
                name: "addEmployee",
                type: "list"
                choices: 
                    [
                        ""
                    ]
            })
        }
    
    function addDepartment() {
        inquirer    
            .prompt ({
                name: "addDepartment",
                type: "list"
                choices: 
                    [
                        ""
                    ]
            })
        }
    
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
    
    function addRole() {
        inquirer    
            .prompt ({
                name: "addRole",
                type: "list"
                choices: 
                    [
                        ""
                    ]
            })
        }


    
    // function to add department
    // function for when employees don't exist
    // function to add employee
    // function to update employee
    // function for when roles don't exist
    // function to add role



    // .then