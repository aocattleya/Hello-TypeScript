"use strict";
var MyMath;
(function (MyMath) {
    function calcRect(height, width) {
        return height * width;
    }
    MyMath.calcRect = calcRect;
})(MyMath || (MyMath = {}));
