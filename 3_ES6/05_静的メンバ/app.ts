class Helpers {
  static PI: number = 3.14;
  static calcCircum(diamenter: number) {
    return this.PI * diamenter;
  }
}
console.log(2 * Helpers.PI);         // 6.28
console.log(Helpers.calcCircum(87)); // 273.18
