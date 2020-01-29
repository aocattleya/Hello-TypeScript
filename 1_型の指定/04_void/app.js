"use strict";
var myName = 123;
function returnMuname() {
    return myName;
}
console.log(returnMuname());
// void
function sayHello() {
    console.log("Hello!");
    // return myName;
    // エラーとなる戻り値が許可されない
    // void型の変数宣言は、undefinedまたはnullしか割り当てることが出来ないので有用でない
}
