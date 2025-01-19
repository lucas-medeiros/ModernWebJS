const students = [
  { name: "Jonh", grade: 7.3, intuition: false },
  { name: "Marie", grade: 9.2, intuition: true },
  { name: "Luke", grade: 9.8, intuition: false },
  { name: "Anne", grade: 8.7, intuition: true }
];

const result = students.map(e => e.grade).reduce((acc, curr) => {
  console.log(acc, curr);
  return acc + curr;
}, 0);

console.log("Result: " + result);
