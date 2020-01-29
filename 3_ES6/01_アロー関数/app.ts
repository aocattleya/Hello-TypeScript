/*
function addNum(value1: number, value2: number): number {
  return value1 + value2;
}

アロー関数
const addNum = (value1: number, value2: number): number => value1 + value2;
*/

const mulNum = (value: number): number => value * 2;
console.log(mulNum(3));

const outputString = (text: string): void => {
  console.log(text);
};
outputString("こんにちは");