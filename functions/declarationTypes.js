console.log(sum(3, 4));

// function declaration
function sum(x, y) {
  return x + y;
}

// function expression
const sub = function(x, y) {
  return x - y;
};

console.log(sub(4, 3));

// named function expression
const times = function times(x, y) {
  return x * y;
};

console.log(times(4, 3));
