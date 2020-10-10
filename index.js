// require files

const fs = require("fs");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// inquirer function
    // .prompt

inquirer    
    .prompt ([
    {
        type: "list",
        name: "view",
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
    }    
    ]);


    // .then