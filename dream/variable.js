'use strict';


let name = 'elle';

console.log(name);

name = 'hello';
console.log(name);

let globalName = 'global name';
{
    let name = 'ellie';
    console.log(`이름은 ${name}`);
    name = `hello`;
    console.log(`이름은 ${name}`);
    console.log(`globalName :  ${globalName}`);
}
 
console.log(`globalName : ${globalName}`);

const daysInWeek = 7;
const maxNumber = 5;

console.log(`상수는 ${daysInWeek}`);
// 주석
//함수가 변수에 선언이 가

const count = 17;
const size = 17.1;
console.log(`value : ${count}, type :${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);

const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = `not a number`;

console.log(`infinity : ${infinity}`);
console.log(`negativeInfinity : ${negativeInfinity}`);
console.log(`nAn : ${nAn}`);

const char = `c`;
const breandan = 'breandan';
const greeting = 'hello' + breandan;
console.log(`char : ${char}, type : ${typeof char}`);
const helloBob = `hello ${breandan}`;
console.log(`value : ${greeting}`);
const bicint = 1234567891011112597542144n;
console.log(`bicint : ${bicint} type ${typeof bicint}`);
Number.MAX_SAFE_INTEGER;

const canRead = true;
const test = 3<1;
console.log(`value:${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);

let nothing = null;
let x;
console.log(`value : ${nothing}, type : ${typeof nothing}`);
console.log(`value : ${x}, type : ${typeof x}`);
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(`symbol : ${symbol1===symbol2}`);
console.log(`value : ${symbol1.description}, typeof : ${typeof symbol1}`);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(`Symbol.for : ${gSymbol1 === gSymbol2}`);
let text = 'hello';
console.log(`text.charAt(0) : ${text.charAt(0)}`);
console.log(`value : ${text}, typeof ${typeof text}`);
text = 1;
console.log(`value : ${text}, typeof ${typeof text}`);
text = '7'+5;
console.log(`value : ${text}, typeof ${typeof text}`);
text = '8'/'2';
console.log(`value : ${text}, typeof ${typeof text}`);



