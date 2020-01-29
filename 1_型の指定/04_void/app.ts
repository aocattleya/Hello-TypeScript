let myName = 123;
function returnMuname(): number {
  return myName;
}
console.log(returnMuname());

// void

function sayHello(): void {
  console.log("Hello!");
  // return myName;
  // エラーとなる戻り値が許可されない
  // void型の変数宣言は、undefinedまたはnullしか割り当てることが出来ないので有用でない
}