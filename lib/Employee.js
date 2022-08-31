//Employee constructor

class Employee {
    constructor(id, companyPosition, name, email){
        this.id = id;
        this.companyPosition = companyPosition;
        this.name = name;
        this.email = email;
    }

    getID() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    
    getPaygrade() {
        return this.companyPosition;
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