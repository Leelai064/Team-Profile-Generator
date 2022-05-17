const employeetype = require('../lib/employeetype');

test ('employee object',() => {

    //
    const employeetype = new Employee ('Leelai', '2956083', 'leelai.hayslett', 'lleelai.hayslett@gmail.com');

    //Using expect Jest, is looking for a matching recieved value meets the expected value expression.
    expect (engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
  
});

test('employee id value', () => {
    const employeetype = new Employee ('Leelai', '2956083', 'leelai.hayslett', 'leelai.hayslett@gmail.com');

    expect(employeetype.getid()).toEqual(expect.any(Number));

});

test('employee email', () =>{
    const employeetype = new Employee ('Leelai', '2956083', 'leelai.hayslett', 'leelai.hayslett@gmail.com');

    expect(employeetype.getEmail()).toEqual(expect.stringContaining(employeetype.email.toString()));

});

test('employee role', () =>{
    const employeetype = new Employee ('Leelai', '2956083', 'leelai.hayslett', 'leelai.hayslett@gmail.com');

    expect(employeetype.getrole()).toEqual("Employee");

});