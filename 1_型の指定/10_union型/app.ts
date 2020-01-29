// 共同体型
let thisYear: number | string = "2020";
console.log(thisYear);
thisYear = "2021";
console.log(thisYear);

// エラー
// thisYear = true

function checkLength(str: string | null): number {
  if (str != null) {
    return str.length;
  } else {
    return 0;
  }
}
