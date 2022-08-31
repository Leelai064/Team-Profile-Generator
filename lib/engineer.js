//Importing the employee type
const Employee = require("./Employee");

//Engineer constructor
class Engineer extends Employee{
    constructor (name, id, email, github){

    super (name, id, email);

    // super is used to callback a parent constructor which in this case will be employeetype
   
    this.github = github;

}

getgithub (){
    return this.github;
}

getRole (){
    return "Engineer";
}

//Because the employee type is Engineer, we need to return engineer
}
module.exports= Engineer;