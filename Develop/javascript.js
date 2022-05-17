//The Team roles
const Employee = require('../lib/Employee');
const engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const manager = require ('../lib/manager');

//Needed node modules and imports
const writer = require('template.js');
const fs= require('fs');
const inquirer =require('inquirer');

//Below will be the prompts needed of the user to generate the data that will be pushed to the HTML file.

const Team = [];

//manager,employee prompts

const Manageradded = () =>{
    return inquirer.prompt([
    {
        if(_nameInput){
            return true;
        }
        else
        {
            console.log("A manager's name must be entered");
        return false;
        }
    }


    ])
}