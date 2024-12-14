const person = { name: "Lucas" };
person.name = "Lucas Medeiros";
console.log(person);

Object.freeze(person);

person.name = "Marie";
person.address = "01 st.";
delete person.name;

console.log(person.name);
console.log(person);
