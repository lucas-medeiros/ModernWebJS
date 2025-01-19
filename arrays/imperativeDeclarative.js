const students = [
  { name: "Jonh", grade: 7.3, intuition: false },
  { name: "Marie", grade: 9.2, intuition: true },
  { name: "Luke", grade: 9.8, intuition: false },
  { name: "Anne", grade: 8.7, intuition: true }
];

// Imperative
let sum = 0;
for (let i = 0; i < students.length; i++) {
  sum += students[i].grade;
}
console.log("Avarage: " + sum / students.length);

// Declarative
const getGrade = student => student.grade;
const getSum = (acc, curr) => acc + curr;
const sum2 = students.map(getGrade).reduce(getSum);
console.log("Avarage: " + sum2 / students.length);
