// preventExtensions
const product = Object.preventExtensions({
  name: "anything",
  price: 1.99,
  tag: "test"
});

console.log("Extensible: ", Object.isExtensible(product));

product.name = "another thing";
product.description = "test description";
delete product.tag;
console.log(product);

// seal
const person = { name: "John", age: 35 };
Object.seal(person);
console.log("Sealed: ", Object.isSealed(person));

person.lastName = "White";
delete person.name;
person.age = 29;
console.log(person);

// freeze = seal + const properties
Object.freeze(person);
