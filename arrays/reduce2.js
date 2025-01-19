const students = [
  { name: "Jonh", grade: 7.3, intuition: false },
  { name: "Marie", grade: 9.2, intuition: true },
  { name: "Luke", grade: 9.8, intuition: false },
  { name: "Anne", grade: 8.7, intuition: true }
];

// quest 1: all intuition?
console.log(" ------------- ");
let all = students.map(e => e.intuition).reduce((acc, curr) => acc && curr);
console.log(all);

all = students.every(e => e.intuition);
console.log(all);

// quest 2: any intuition?
console.log(" ------------- ");
let any = students.map(e => e.intuition).reduce((acc, curr) => acc || curr);
console.log(any);

any = students.some(e => e.intuition);
console.log(any);
