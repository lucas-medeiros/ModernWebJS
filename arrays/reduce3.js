Array.prototype.reduce2 = function(callback, init) {
  const initIndex = init ? 0 : 1;
  let acc = init || this[0];
  for (let i = initIndex; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

const students = [
  { name: "Jonh", grade: 7.3, intuition: false },
  { name: "Marie", grade: 9.2, intuition: true },
  { name: "Luke", grade: 9.8, intuition: false },
  { name: "Anne", grade: 8.7, intuition: true }
];

let all = students.map(e => e.intuition).reduce2((acc, curr) => acc && curr);
console.log(all);

let any = students.map(e => e.intuition).reduce2((acc, curr) => acc || curr);
console.log(any);

const nums = [1, 2, 3, 4, 5, 6];
const sum = nums.reduce((acc, curr) => acc + curr, 5);
console.log(sum);
