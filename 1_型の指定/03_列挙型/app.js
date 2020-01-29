"use strict";
// 大文字
var Colors;
(function (Colors) {
    Colors[Colors["Gray"] = 0] = "Gray";
    Colors[Colors["Green"] = 100] = "Green";
    Colors[Colors["Blue"] = 101] = "Blue"; // 101
})(Colors || (Colors = {}));
var myColor = Colors.Blue;
console.log(myColor); // 101
