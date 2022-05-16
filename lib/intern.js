//Intern constructor
class Intern extends Employee {
    constructor (name, id, email, school){
        super (name, id, email);
        this.school= school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern"
    }
    //The employee type is Intern and we want that returned/reflected properly.
}