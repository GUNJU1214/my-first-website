'use strict';

let v_name = "정성필";
let v_age = 30;

alert(v_name);
console.log(v_age)

const isAdult =  ("당신은 성인입니까?");


let l_name = "JSF";
let l_age = 50;
const c_PI = 3.141592;

//alert(l_age);
//console.log(`l_age의 값은 ${l_age}, 문자형은 ${typeof l_age}입니다.`);
//console.log(`c_PI의 값은 ${c_PI}, 믄자형은 ${typeof c_PI}`);
let l_age_sen = `내 이름은 ${l_name}입니다.`;
//console.log(l_age>40);
//console.log(l_age_sen);
let l_undefined;
//console.log(`l_undefined의 값은 ${l_undefined} 문자형은 ${typeof undefined}`);
let l_user= null;
//console.log(`l_user의 값은 ${l_user}, 문자형은 ${typeof l_user}`);
//console.log("나는 " + l_name + "입니다.");
//console.log("나는 "+l_name + "이고 " + l_age + "살 입니다.");
//const c_prom_name = prompt("이름을 입력하세요.", "필수사항입니다.");
//alert(`환영합니다. ${c_prom_name}님`);
//const isAdult = confirm("당신은 성인입니까?");
//console.log(`성인이군요 ${isAdult}, 환영합니다.`);
//const mathScore = prompt(`수학점수를 입력하세요.`);
//const engScore =  prompt('영어점수를 입력하세요')
//let l_score = (mathScore + engScore) / 2;
//console.log(l_score);
//console.log(String(3), String(true), String(false), String(null), String(undefined));

//console.log(`문자 ${l_num}을 ,${Number(l_num)}으로 형변환한다.`); console.log(`논리형 참의 숫자값은 ${Number(true)}, 거짓의 숫자값은 ${Number(false)}이다`);
let l_bl;
let l_num = 3;
let l_i=0;
/*console.log(`"${l_num}"의 논리형은 ${Boolean(l_num)}, ${l_bl}의 논리형은 ${Boolean(l_bl)}이다`);

l_num += 3;
let l_num2=4;
console.log(`${l_num}, ${l_num--}, 후행 ${l_num}`); 
console.log(l_num == l_num2)
if(l_num===l_num2){
  console.log(`${l_num}과 ${l_num2}는 완전일치합니다.`);
}
else if(l_num==l_num2){
  console.log(`${l_num}과 ${l_num2}은 일치합니다.` );
}
else{
  console.log(`${l_num}과 ${l_num2}는 일치하지 않습니다.`)
}

for(i=0; i<=10; i++){
  console.log(`i의 값은 ${i}`);
  
}
let i=0;

while(i<10){
 console.log(`while i=${i}`);
  i++;
}


let i = 0;

do 
  console.log(`do while  ${i++}`)
while(i<10)


let i = 0;
while(true){
  let answer = confirm(`계속할까요? ${i}`)
  console.log(`i = ${i++}`)
  if(answer){
    break;
  }
}

for(let i =0; i<10; i++){
  if(i%2){
    continue;
  }
    console.log(`${i}는 짝수입니다.`) 
}


let l_bool
do
  {
let fruit = prompt(`무슨과일을 사고싶나요?`);

switch(fruit){
case '사과':
  console.log(`${fruit}는 100원입니다.`);
   break;
case '바나나':
  console.log(`${fruit}는 200원입니다`);
    break;
case '복숭아':
case '배':
  console.log(`${fruit}는 300원입니다`);
  break;

default : 
console.log('요청하신 과일은 판매하지 않습니다.');
}
  l_bool = confirm('과일을 더 살까요?');
}
while(l_bool)