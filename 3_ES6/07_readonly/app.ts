// シングルトン

class OnlyOne {
  private static instance: OnlyOne;
  private constructor(public readonly name: string) {}
  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne("The Only One");
    }
    return OnlyOne.instance;
  }
}

/* エラー
let wrong = new OnlyOne("The Only One");
*/

let right = OnlyOne.getInstance();
console.log(right.name);

/* エラー
right.name = "変更";
console.log(right.name);
*/