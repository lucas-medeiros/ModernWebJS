const person = {
  name: "Lucas",
  age: 25,
  weight: 65
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

Object.entries(person).forEach(([key, value]) => {
  console.log(key + ": " + value);
});

Object.defineProperty(person, "birthday", {
  enumerable: true,
  writable: false,
  value: "27/12/1998"
});

person.birthday = "01/01/2000";
console.log(person.birthday);
console.log(Object.keys(person));

const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);

Object.freeze(obj);
obj.c = 15;
console.log(obj);
