"use strict";
function greet(person) {
    console.log("こんにちは、" + person.name + "！");
}
var person = {
    name: "太郎",
    age: 25,
    hobbies: ["game", "sports"],
    greet: function (lastName) {
        console.log("こんにちは、" + lastName + this.name + "！");
    }
};
function changeName(person) {
    person.name = "青カトレア";
}
// greet({ name: "太郎", age: 25 });
changeName(person);
greet(person);
person.greet("名無しの");
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function (lastName) {
        console.log("こんにちは、" + lastName + this.name + "！");
    };
    return Person;
}());
var myPerson = new Person("誰かさん");
greet(myPerson);
myPerson.greet("どこかの");
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
