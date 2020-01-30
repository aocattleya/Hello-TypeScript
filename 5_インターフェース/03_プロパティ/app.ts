interface NamedPerson {
  name: string;
  age?: number;
  [prepName: string]: any;
}

function greet(person: NamedPerson): void {
  console.log("こんにちは、" + person.name + "！");
}

const person = {
  name: "太郎",
  age: 25,
  hobbies: ["game", "sports"]
};

function changeName(person: NamedPerson) {
  person.name = "青カトレア";
}

greet({ name: "太郎", age: 25 });
changeName(person);
greet(person);
