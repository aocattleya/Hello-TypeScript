function checkPrime(ps: number[], x: number): boolean {
  for (let p of ps) {
    if (p * p > x) break;
    if (x % p == 0) return false;
  }
  return true;
}

function prime(n: number): number[] {
  const ps = [2];
  for (let x = 3; x <= n; x += 2) {
    if (checkPrime(ps, x)) {
      ps.push(x);
    }
  }
  return ps;
}

console.log(String(prime(100)));
console.log(String(prime(500)));
