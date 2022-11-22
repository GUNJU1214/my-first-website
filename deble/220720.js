<html>
    <head>
    
    <script>
'use strict';
let arr = [1,20,5,3,6,4,7,9,11,13];

console.log(`include : ${arr.includes(7)}`);
console.log(`include : ${arr.includes(19)}`);


const result = arr.find((item) => {
    return item % 2 === 0;
});

console.log(`find : ${result}`);

const resultidx = arr.findIndex((item) => {
    return item === 11;
});
    console.log(`findIndex : ${resultidx}`);

let userlist = [
    {name : 'mike', age: 30},
    {name : 'jane', age: 27},
    {name : 'tom', age: 9},
];
let userlt = userlist.find((user) => {
    if(user.age < 20){
        return true;
    }
    return false;
 });
 console.log(userlt);
 console.log(`find : ${userlt}`);

 let userlt1 = userlist.findIndex((user) => {
    if(user.age < 20){
        return true;
    }
    return false;
 });
 console.log(userlt1);
 console.log(`find : ${userlt1}`);

 let userfilter = arr.filter((item) => {
            return item % 2 === 0;


 });
console.log(userfilter);
<?script>
    </head>
    </html>