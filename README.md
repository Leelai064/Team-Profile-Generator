# Team-Profile-Generator

## Description

The last assignment Node.js was utilized to produce a README file, based off of user interaction. This project however will take that concept a step further. Team Profile Generator takes user input from the intergrated terminal to generate an HTML file displaying the data provided. With that concept in mind, the user will be asked information about their team members. Information such as name, ID, Email, and Github username will be entered. Once the information the user needs of each employee has been entered this data will import into a new HTML file. The HTML file will fully display the user inputs on each employee in neat cards.

## Table of Contents
* [Installation](#installation)
* [Github_Link](#github-repository-link)
* [Usage](#usage)
* [Features](#features)
* [Tests](#tests)


## Installation
```
Before this application can be run properly, the user will need to install:
*npm
*package.json
*package-lock.json
*Create a .gitignore file
```
## Usage
![Demo](./assets/Demo.gif)

* If you would like to view the gif above a video link to the google drive is listed below. If you have any comments/questions/concerns please do not hesistate to reach out to me directly through Github. Thank you.

Google Drive Link Access: https://drive.google.com/file/d/1hLpj23LdTEkYky1SgUQ7irQqR0A-N2hd/view
## GitHub Repository Link

https://github.com/Leelai064/Team-Profile-Generator

## Features

* Object Oriented Programming concepts
* Node.js
* Inquirer
* FS Node Modules: Used to generate the HTML file from the strings found in the Javascript code.
* Test Driven Devlopment: Used to run tests on the class contructors created to ensure they're working properly.
* Javascript
* CSS

## Criteria
* WHEN I am prompted for my team members and their information THEN an HTML file is generated that displays a nicely formatted team roster based on user input
* WHEN I click on an email address in the HTML THEN my default email program opens and populates the TO field of the email with the address
* WHEN I click on the GitHub username THEN that GitHub profile opens in a new tab
* WHEN I start the application THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
* WHEN I enter the team manager’s name, employee ID, email address, and office number THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
* WHEN I select the engineer option THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
* WHEN I select the intern option THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
* WHEN I decide to finish building my team THEN I exit the application, and the HTML is generated