const employee = { name: "Marie", salary: 12345.99 };
const clone = { isEnable: true, ...employee };

console.log("clone :>> ", clone);

const groupA = ["John", "Snow", "Daenerys"];
const list = ["Tyron", "Lannister", ...groupA, "Ghost"];
console.log('list :>> ', list);
