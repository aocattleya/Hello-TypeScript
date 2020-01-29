"use strict";
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircum = function (diamenter) {
        return this.PI * diamenter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI); // 6.28
console.log(Helpers.calcCircum(87)); // 273.18
