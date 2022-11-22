'use strict';
//JSON.stringify)

//1. object to JSON
    //stringfy(obj)
    let json = JSON.stringify(true);
    console.log(json)

    json = JSON.stringify(['apply','banana']);
    console.log(json);

    const rabbit  = {
        name : 'tori',
        color : 'white',
        size : null,
        birthDate : new Date(),
        jump : () => {
            let name;
            console.log(`${name} can jump!`);
        },
    };
    json = JSON.stringify(rabbit);
    console.log(json);
    json = JSON.stringify(rabbit,['name', 'color', 'size']);
    console.log(json);
    json = JSON.stringify(rabbit, (key, value) => {
        console.log(`key : ${key}, value : ${value}`);
        //return value;
        return key === 'name' ? 'ellie' : value;
        });
    console.log(json);


//2. JSON to Object
    //parse(json) 
    console.clear();
    console.log("json to Object");

    json = JSON.stringify(rabbit);
    console.log(json);
    let obj = JSON.parse(json);
    console.log(obj);
    rabbit.jump();
    obj = JSON.parse(json, (key, value) => {
        console.log(`key: ${key}, value: ${value}`);
        //return value;
        return key === "birthDate" ? new Date() : value;

    });
    console.log(`오브잭트 : ${rabbit.birthDate.getDate()}`);
    console.log(`오브잭트 : ${rabbit.birthDate}`);
    console.log(`제이슨 : ${obj.birthDate}`);



