var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calcCircum(diameter) {
        return diameter * PI;
    }
    MyMath.calcCircum = calcCircum;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calcRect(height, width) {
        return height * width;
    }
    MyMath.calcRect = calcRect;
})(MyMath || (MyMath = {}));
console.log(MyMath.calcCircum(3));
console.log(MyMath.calcRect(20, 8));
var PI = 2.14;
console.log(PI);
