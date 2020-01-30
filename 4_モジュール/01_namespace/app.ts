namespace MyMath {
  const PI = 3.14;

  export function calcCircum(diameter: number) {
    return diameter * PI;
  }

  export function calcRect(height: number, width: number) {
    return height * width;
  }
}

console.log(MyMath.calcCircum(3));
console.log(MyMath.calcRect(20, 8));

const PI = 2.14;
console.log(PI);