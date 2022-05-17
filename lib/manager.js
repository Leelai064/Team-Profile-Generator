//Importing the employee type
const Employee = require("./Employee");
const employeetype = require("./employeetype");
// Manager constructor
class Manager extends Employee {
    constructor (name, id, email, officeNum){

        super (name,id,email);
        this.officeNum = officeNum;
    }
    getRole(){
        return "Manager";
    }
    //The employee type is Manager and we want that returned/reflected properly.
}
modele.exports = Manager;