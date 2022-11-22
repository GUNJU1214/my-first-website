'use strict';

const obj = {
    1:"1입니다.",
    false : "거짓"
};

result = Object.keys(obj);

console.log(result);


const id = Symbol('id');

const user = {
    name : 'mike',
    age : 30,
    [id] : 'myid'
};

console.log(user);

const showName = Symbol("show Name");

user[showName] = function () {
    console.log(`showName : ${this.name}`);
};

user[showName]();

for(let key in user){
    console.log(`his ${key} is ${user[key]}`);
};


