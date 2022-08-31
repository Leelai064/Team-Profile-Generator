const Employee = require('./employee');

class Manager extends Employee {
    constructor(id, companyPosition, fullName, email, officeNum) {
        super (id, companyPosition, fullName, email);
        this.officeNum = officeNum;
    }

    getOfficeNum() {
        return this.officeNum;
    }
}

module.exports = Manager;