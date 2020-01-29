function sumOfPos(arr: number[]): number {
  return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
}
