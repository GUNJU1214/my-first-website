'use strict';

const id1 = Symbol.for('id');
const id2 = Symbol.for('id');

console.log(Symbol.keyFor(id1));
console.log(`비교 ${id1===id2}`);


const id = Symbol('id 입니다.');

console.log(id.description);

const user = {
    name : 'mike',
    age : 30,
    [id] : 'myid'

}

//console.log(Object.getOwnPropertySymbols(user));
//console.log(Reflect.ownKeys(user));

const showName = Symbol('show name');
user[showName] = function(){
    console.log(this.name);
}
user[showName]();


for(let key in user){
    console.log(`his ${key} is ${user[key]}`);
};