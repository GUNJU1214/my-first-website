'use strict';

let n = 'name';
let a = 'age';

const user = {
    [n] : 'mike',
    [a] : 52
};

//console.log(user);

//const user2 = Object.assign({},user);

//console.log(user);


let arr = [
    ['mon','월'],
    ['tue','화'],
];

const result = Object.fromEntries(arr);

console.log(result);


