function sum(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}

console.log(sum());
console.log(sum(3));
console.log(sum(1, 2, 3));
console.log(sum(0, 0, 0));

function sum2(a, b, c) {
  a = a !== undefined ? a : 1;
  b = 1 in arguments ? b : 1;
  c = !isNaN(c) ? c : 1;
}

console.log(sum());
console.log(sum(3));
console.log(sum(1, 2, 3));
console.log(sum(0, 0, 0));

function sum3(a = 1, b = 1, c = 1) {
  return a + b + c;
}

console.log(sum());
console.log(sum(3));
console.log(sum(1, 2, 3));
console.log(sum(0, 0, 0));
