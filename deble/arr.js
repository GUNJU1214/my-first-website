'use strict';
let arr = [1,2,3,4,5,6,7];
let result = arr.splice(1,2);

console.log(`splice ${result}`);

arr.splice(1,2,9);
console.log(arr);

console.log(`arr.silice(2,3) : ${arr.slice(2,3)}`);
let arr2 = arr.slice();
console.log(`arr slice() : ${arr2}`);

let arr3 = [10,11];
console.log(`concat : ${arr3.concat(arr2)}`);

arr = ['mike', 'Tom', 'jane'];
console.log(`arr : ${arr}`);

arr.forEach((name,index) => {
    console.log(`forEach : ${index+1}, ${name}`);
    }
);
 arr = [1,2,3,5,12,6,7,8,5,11,0];
console.log(`arr.indexOf : ${arr.indexOf(5,5)}`);
