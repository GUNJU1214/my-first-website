'use strict';

function prt(x){
    console.log(`값은 : ${x}`);
    
}

let num  = 10;
console.log(num.toString());
num.toString(2);
num.toString(8);
console.log(num.toString(16));
console.log(Math.PI);
let num1 = 5.1;
let num2 = 5.7;

// Math.ceil() 올림

console.log(Math.ceil(num1)); // 올림
Math.ceil(num2); // 올림

//Math.floor() : 내림

console.log(`내림 : ${Math.floor(num1)}`);
Math.floor(num2);


console.log(Math.round(num1));
console.log(Math.round(num2));


let userRate = 10/3;

console.log(typeof(userRate.toFixed(3)));
console.log(userRate.toFixed(4)+3);
console.log(Number(userRate.toFixed(4))+3);

let x;

console.log(isNaN(x));

let margin = '10px';

prt(parseInt(margin));

let redColor = '3E3C3A385';

prt(parseInt(redColor, 16));

prt(parseInt('11',2));

prt(Math.PI.toFixed(2));
prt(Math.floor(Math.random()*100)+1);

prt(Math.max(1,2,3,4,15.6,10.3));
prt(Math.min(1,2,3,4,15.6,10.3));


prt(Math.abs(-10.5));

prt(Math.pow(2,3)); //제곱
prt(Math.sqrt(49)); //제곱근

prt((10/3).toFixed(2));