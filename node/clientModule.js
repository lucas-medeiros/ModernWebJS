const moduleA = require("./module1");
const moduleB = require("./module2");

console.log(moduleA.hello);
console.log(moduleA.greetings);
console.log(moduleA.goodbye);
console.log(moduleA);

console.log(moduleB.morning);
console.log(moduleB.night());
console.log(moduleB);
