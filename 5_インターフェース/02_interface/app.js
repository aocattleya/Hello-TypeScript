"use strict";
function greet(person) {
    console.log("こんにちは、" + person.name + "！");
}
var person = {
    name: "太郎",
    age: 25
};
function changeName(person) {
    person.name = "青カトレア";
}
greet(person);
changeName(person);
greet(person);
