const countDown = (start: number = 10): void => {
  while (start > 0) {
    console.log(start);
    start--;
  }
  console.log("終了");
};
countDown();
