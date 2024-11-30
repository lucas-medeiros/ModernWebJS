function buy(job1, job2) {
  const buyIceCream = job1 || job2;
  const buyTv50 = job1 && job2;
  // const buyTv32 = !!(job1 ^ job2) // bitwise xor
  const buyTv32 = job1 != job2;
  const keepHealthy = !buyIceCream;

  return { buyIceCream, buyTv50, buyTv32, keepHealthy };
}

console.log(buy(true, true));
console.log(buy(true, false));
console.log(buy(false, true));
console.log(buy(false, false));
