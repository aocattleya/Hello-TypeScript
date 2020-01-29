"use strict";
// 共同体型
var thisYear = "2020";
console.log(thisYear);
thisYear = "2021";
console.log(thisYear);
// エラー
// thisYear = true
function checkLength(str) {
    if (str != null) {
        return str.length;
    }
    else {
        return 0;
    }
}
