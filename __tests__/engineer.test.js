// import our engineer constructor
// Then we will need to create an engineer object.

const Engineer = require('../lib/engineer');

test ('engineer object',() => {

    //
    const Engineer = new Engineer ('Leelai', '2956083', 'leelai.hayslett', 'leelai064');

    //Using expect Jest, is looking for a matching recieved value meets the expected value expression.
    expect (engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('engineer github value', () => {
    const Engineer = new Engineer ('Leelai', '2956083', 'leelai.hayslett', 'leelai064');

    expect(engineer.getgithub()).toEqual(expect.stringcontaining(engineer.github.tostring()));

});

test('engineer employee role', () =>{
    const Engineer = new Engineer ('Leelai', '2956083', 'leelai.hayslett', 'leelai064');

    expect(engineer.getrole()).toEqual("Engineer");

});