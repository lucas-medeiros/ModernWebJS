// 1
const greetings = name => "Hello, " + name + "!";
console.log(greetings("John"));

// 2
const getAgeDays = age => age * 365;
console.log(getAgeDays(26));

// 3
const getSalary = (hours, value) => "Salary: R$" + (hours * value).toFixed(2);
console.log(getSalary(150, 40.5));

// 4
months = [
  "jan",
  "fev",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez"
];
const getMonth = num => months[num];
console.log(getMonth(4));

// 5
const isGrater = (num1, num2) => num1 >= num2;
console.log(isGrater(0, 0));

