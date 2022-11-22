'use strict';

let user = confirm("색깔 바꾸기를 실행할까요?");

function process(user) {
    if (user == true) {
        document.write("<script src='../js/chang-color.js'></script>");

    }
    else {
        alert("실행되지 않습니다.");
    }
}

process(user);