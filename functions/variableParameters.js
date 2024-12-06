function sum() {
  let result = 0;
  for (i in arguments) {
    result += arguments[i];
  }

  return result;
}

console.log(sum());
console.log(sum(1));
console.log(sum(1.1, 2.2, 3.3));
console.log(sum(1.1, 2.2, "Teste"));
console.log(sum("a", "b", "c"));
