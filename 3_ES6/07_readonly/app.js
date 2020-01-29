"use strict";
// シングルトン
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The Only One");
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
/* エラー
let wrong = new OnlyOne("The Only One");
*/
var right = OnlyOne.getInstance();
console.log(right.name);
/* エラー
right.name = "変更";
console.log(right.name);
*/ 
