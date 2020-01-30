"use strict";
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calcCircum(diameter) {
        return diameter * PI;
    }
    MyMath.calcCircum = calcCircum;
})(MyMath || (MyMath = {}));
