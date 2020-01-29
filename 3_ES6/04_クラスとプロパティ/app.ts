class Person {
  constructor(
    public name: string,
    private place: string,
    protected age: number
  ) {
    this.name = name;
    this.place = place;
    this.age = age;
  }
}
const person = new Person("太郎", "東京", 30);
console.log(person);
