"use strict";
/*
function addNum(value1: number, value2: number): number {
  return value1 + value2;
}

アロー関数
const addNum = (value1: number, value2: number): number => value1 + value2;
*/
var mulNum = function (value) { return value * 2; };
console.log(mulNum(3));
var outputString = function (text) {
    console.log(text);
};
outputString("こんにちは");
