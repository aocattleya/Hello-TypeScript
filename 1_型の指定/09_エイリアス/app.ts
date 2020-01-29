type Complex = {
  data: number[];
  output: (all: boolean) => number[];
};
let Complex2: Complex = {
  data: [123, 456789, 1.9],
  output: function(flag: boolean): number[] {
    return this.data;
  }
};
