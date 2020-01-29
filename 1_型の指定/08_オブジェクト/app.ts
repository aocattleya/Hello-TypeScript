let userData: {
  name: string;
  age: number;
} = {
  name: "aocattleya",
  age: 25
};

// エラー
// userData["plice"] = "東京";
// console.log(userData["place"]);

let complex: {
  data: number[];
  output: (all: boolean) => number[];
} = {
  data: [100, 3.14, -3],
  output: function(all: boolean): number[] {
    return this.data;
  }
};
