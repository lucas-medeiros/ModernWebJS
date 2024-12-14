// literal notation
const obj1 = {};
console.log("obj1 :>> ", obj1);

// Object in JS
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log("obj2 :>> ", obj2);

// contructor funcion
function Product(name, price, desc) {
  this.name = name;
  this.getDiscountPrice = () => price * (1 - desc);
}
const p1 = new Product("Pen", 7.99, 0.15);
const p2 = new Product("Notebook", 2998.99, 0.25);
console.log(p1.getDiscountPrice(), p2.getDiscountPrice());

// Function Factory
function createEmployee(name, baseSalary, missingDays) {
  return {
    name,
    baseSalary,
    missingDays,
    getSalary: () => baseSalary / 30 * (30 - missingDays)
  };
}
const f1 = createEmployee("John", 8000, 4);
const f2 = createEmployee("Marie", 11500, 1);
console.log(f1.getSalary(), f2.getSalary());

// Object.create
const obj3 = Object.create(null);
obj3.name = "Anna";
console.log("obj3 :>> ", obj3);

// JSON parse
const obj4 = JSON.parse('{"info" : "I am a JSON :)" }');
console.log("obj4 :>> ", obj4);
