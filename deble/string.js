'use strict';

let desc = `오늘은 맑고 화창한 날씨가  `;

function prn(x){
    console.log(x);
}
prn(desc);

prn(desc.length);
prn(desc[1]);

if(desc.indexOf('화창한')>-1){
    prn(desc.indexOf('화창한'))+prn("포함");
}
prn(desc.slice(0,5));

prn(desc.slice(0,-9));

prn(desc.substring(7,10));

prn(desc.substr(3,5));

prn(desc.trim());

prn(desc.repeat(3));

let list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열"
];

let newList = [];

for (let i = 0; i<list.length; i++){
    newList.push(list[i].slice(4));
}

console.log(newList);

function hansCola(str){
    console.log(str + str.includes("콜라"));
    //if (str.indexOf("콜라")>-1) {
    if (str.includes("콜라")){
        //console.log("금칙어가 있습니다.");
        return true;
    } else{

        //prn("통과");
        return false;
    }
}

hansCola("와 사이다가 짱이야");
hansCola("무슨소리, 콜라가 짱이야");
hansCola("콜라");