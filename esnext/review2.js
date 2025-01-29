// arrow function
const sum = (a, b) => a + b;
console.log("result :>> ", sum(1, 2));

// arrow function (this)
const lexic1 = () => console.log(this === module.exports);
lexic1();

// default parameters
function log(text = "Hello world!") {
  console.log(text);
}
log();
log("Good morning!");

// rest operator
function total(...numbers) {
  let result = 0;
  numbers.forEach(e => (result += e));
  return result;
}
console.log("result :>> ", total(1, 2, 3, 4, 5));
