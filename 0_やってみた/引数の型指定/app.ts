/* calcTotalFeeの引数numにnumber型を設定

  const calcTotalFee = num => {
  const total = num * 1.1;
  console.log(`合計金額は${total}円です`);
};

const el1 = document.getElementById("hoge");
el1.addEventListener("click", () => calcTotalFee(1000));
*/

const calcTotalFee = (num: number) => {
  const total = num * 1.1;
  console.log(`合計金額は${total}円です`);
};

const el1 = document.getElementById("hoge");
el1.addEventListener("click", () => calcTotalFee(1000));