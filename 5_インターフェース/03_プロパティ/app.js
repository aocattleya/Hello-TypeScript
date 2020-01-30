"use strict";
function greet(person) {
    console.log("こんにちは、" + person.name + "！");
}
var person = {
    name: "太郎",
    age: 25,
    hobbies: ["game", "sports"]
};
function changeName(person) {
    person.name = "青カトレア";
}
greet({ name: "太郎", age: 25 });
changeName(person);
greet(person);
