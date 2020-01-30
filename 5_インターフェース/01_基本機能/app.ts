function greet(person: {name: string}): void {
  console.log("にんにちは、" + person.name + "！");
}
const person = {
  firstName: "太郎",
  age: 30
};

/* エラーとなる

greet(person);

*/