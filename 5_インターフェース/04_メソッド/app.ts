interface NamedPerson {
  name: string;
  age?: number;
  [prepName: string]: any;
  greet(lastName: string): void;
}

function greet(person: NamedPerson): void {
  console.log("こんにちは、" + person.name + "！");
}

const person: NamedPerson = {
  name: "太郎",
  age: 25,
  hobbies: ["game", "sports"],
  greet(lastName: string) {
    console.log("こんにちは、" + lastName + this.name + "！");
  }
};

function changeName(person: NamedPerson) {
  person.name = "青カトレア";
}

// greet({ name: "太郎", age: 25 });
changeName(person);
greet(person);
person.greet("名無しの");

class Person implements NamedPerson {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet(lastName: string) {
    console.log("こんにちは、" + lastName + this.name + "！");
  }
}
const myPerson = new Person("誰かさん");
greet(myPerson);
myPerson.greet("どこかの");
