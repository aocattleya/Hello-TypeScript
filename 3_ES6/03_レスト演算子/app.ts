function makeArray(...args: number[]) {
  return args;
}
console.log(makeArray(1, 2));

// タプル
function printInfo(...info: [string, number]) {
  console.log("私の名前は" + info[0] + "で、" + info[1] + "歳です。");
}
printInfo("太郎", 30);
