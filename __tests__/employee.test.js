const Employee = require('../lib/Employee');

test ('employee object',() => {

    //
    const employee = new Employee ('Leelai', '2956083', 'leelai.hayslett', 'lleelai.hayslett@gmail.com');

    //Using expect Jest, is looking for a matching recieved value meets the expected value expression.
    expect (employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
  
});

test('employee id value', () => {
    const employee = new Employee ('Leelai', '2956083', 'leelai.hayslett', 'leelai.hayslett@gmail.com');

    expect(employe.getid()).toEqual(expect.any(Number));

});

test('employee email', () =>{
    const employe = new Employee ('Leelai', '2956083', 'leelai.hayslett', 'leelai.hayslett@gmail.com');

    expect(employe.getEmail()).toEqual(expect.stringContaining(employeetype.email.toString()));

});

test('employee role', () =>{
    const employe = new Employee ('Leelai', '2956083', 'leelai.hayslett', 'leelai.hayslett@gmail.com');

    expect(employe.getrole()).toEqual("Employee");

});