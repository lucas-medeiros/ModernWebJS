const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c };
const obj2 = { a, b, c };
console.log(obj1, obj2);

const attrName = "grade";
const attrValue = 7.87;
const obj3 = {};
obj3[attrName] = attrValue;
console.log(obj3);

const obj4 = { [attrName]: attrValue };
console.log(obj4);

const obj5 = {
  func1: function() {
    // do somenthing here
  },
  func2() {
    // do somenthing here
  }
};
console.log(obj5);
