const Manager = require('../lib/manager');

test ('Manager object',() => {

    //
    const Manager = new Manager ('Leelai', '2956083', 'leelai.hayslett', 'leelai064');

    //Using expect Jest, is looking for a matching recieved value meets the expected value expression.
    expect (Manager.officeNum).toEqual(expect.any(Number));
});

test('Manager employee role', () => {
    const Manager = new Manager ('Leelai', '2956083', 'leelai.hayslett', 'leelai064');

    expect(Manager.getrole()).toEqual("Manager");

});