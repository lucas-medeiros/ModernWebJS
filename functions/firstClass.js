// JsS functions are First-Class objects
// High-order function

function func1() {}

// Save on var
const func2 = function() {};

// Save on array
const array = [
  function(a, b) {
    return a + b;
  },
  func1,
  func2
];
console.log(array[0](2, 3));

// Save on object
const obj = {};
obj.speak = function() {
  return "Hello!";
};
console.log(obj.speak());

// Send function as parameter
function run(func) {
  func();
}
run(function() {
  console.log("Running...");
});

// Function can return another/contain funcion
function sum(a, b) {
  return function(c) {
    console.log(a + b + c);
  };
}
sum(2, 3)(4);
const result = sum(2, 3);
result(4);
