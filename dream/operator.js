'use strict';
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals:1+2=${1+2}`);

console.log(1+1);
console.log(1-1);
console.log(1*1);
console.log(1/1);
console.log(5%2);
console.log(2**3);


let counter = 3

const preInscrement = ++counter;
//counter = counter + 1;

console.log(`counter : ${counter}`);
console.log(`preInscrement : ${preInscrement}`);

// +=, -=, *=, /=, x =+ y
// <, <=, >, >=
// || : or,  && : and, ! : not
const value1 = false;
const value2 = 4 < 2;

console.log(`and ${value1 && !value2}`);
console.log(`or ${value1 || !value2}`);
console.log(`not ${!value1}`);

const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;

console.log(`ellie1 : ${ellie1}`);
console.log(`ellie2 : ${ellie2}`);
console.log(`ellie3 : ${ellie3}`);
console.log(ellie1.name);


console.log(`ellie1 == ellie2: ${ellie1 == ellie2}`); //false
console.log(`ellie1 === ellie2: ${ellie1 === ellie2}`);// false
console.log(`ellie1 === ellie3: ${ellie1 === ellie3}`); //true

console.log(0 == false); //t
console.log(0 === false);//f
console.log('' == false);//t
console.log('' === false);//f
console.log(null == undefined);//t
console.log(null === undefined);//f

const name = "ellie";
if (name === "ellie"){
    console.log("welcome, Ellie!");
} else if (name === "coder") {
    console.log("You are amazing coder");
} else {
    console.log("unkwnon");
}
console.log(name === "ellie"?"yes":"No");

const brower = "IE";
switch (brower) {
    case "IE":
        console.log("go away");
        break;
    case "Chrome":
    case "firebox":
        console.log("love you");
        break;
    default:
        console.log("same all!");
        break;
}
let i = 3;
while (i>0){
    console.log(`while ${i--}`);
}

do{
    console.log(`do while ${i--}`);

}while (i>0);

for(i=3; i>0; i--){
    console.log(`for ${i}`);
}

for(let i = 3; i>0; i -= 2){
    console.log(`inline variable for : ${i}`);
}
for (let i = 0; i < 10 ; i++){
    for (let j = 0 ; j < 10 ; j++){
        //console.log(`i : ${i}, J : ${j}`);
    }
}
i = 0

while(i<11){
    
    if (i%2 != 0){
        i++
        continue;
    }
        console.log(`짝수 while : ${i++}`);
    
}

for (i=0; i <11 ; i++){
    if (i%2 !== 0){
        continue;
    }
        console.log(`짝수 : ${i++}`);
    
}
for(i=0; i<11; i++){
    if(i===3){
        break;
    }else {
        console.log(`중단 ${i}`)
    }

}