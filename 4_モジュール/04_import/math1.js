"use strict";
var MyMath;
(function (MyMath) {
    var Circum;
    (function (Circum) {
        var PI = 3.14;
        function calcCircum(diameter) {
            return diameter * PI;
        }
        Circum.calcCircum = calcCircum;
    })(Circum = MyMath.Circum || (MyMath.Circum = {}));
})(MyMath || (MyMath = {}));
