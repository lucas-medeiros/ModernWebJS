// ES8: Object.values | Object.entries
const obj = { a: 1, b: 2, c: 3 };
console.log("Object.values(obj) :>> ", Object.values(obj));
console.log("Object.entries(obj) :>> ", Object.entries(obj));

// class
class Animal {}
class Dog extends Animal {
  speak = () => "Au au!";
}

console.log(new Dog().speak());
