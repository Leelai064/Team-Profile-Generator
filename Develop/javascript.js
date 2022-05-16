// npm i jest --save-dev
const Turtle = require('./lib/Turtle');

const writer = require('./src/template.js');

console.log(writer("Turtles Rock!", new Turtle(5).getTurtles()));

const employeeType = require('./lib/employeetype.js');

const writer = require('template.js');