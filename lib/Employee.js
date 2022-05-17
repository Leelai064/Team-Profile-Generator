//Employee constructor

class Employee{
    constructor (name, id, email){
        this.name = name;
        this.id =  id;
        this.email = email;
    }
    
    getname(){

        return this.name;

    }
    getRole(){

        return 'Employee';
        
    }
    getid(){

        return this.id;
        
    }
    getemail(){

        return this.email;
        
    }
}
module.exports = Employee;
//Since this is employee general information there might need to be a role





// Name: Manager: ID: Email: Office Number
// Name: Engineer: ID: Email: Github
// Name: Engineer: ID: Email: Github
// Name: Engineer: ID: Email: Github
// Name: Intern: Email: School

// object statements- 
// Name:
// Position:
// Id:
// Email:
// (Depending on position) Office Number/ Github

// Need to make tests.js for: Engineer, Manager, Intern, Employee