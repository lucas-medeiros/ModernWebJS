const numbers = [...Array(10).keys()].map(x => x + 1); // [1, 2, ... 9, 10]

for (x in numbers) {
  if (x == 5) {
    break;
  }
  console.log("x = " + numbers[x]);
}

for (y in numbers) {
  if (y == 5) {
    continue;
  }
  console.log("y = " + numbers[y]);
}

extern: for (a in numbers) {
  for (b in numbers) {
    if (a == 2 && b == 3) break extern;
    console.log(`Pair = ${a}, ${b}`);
  }
}
