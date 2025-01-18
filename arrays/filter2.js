Array.prototype.filter2 = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) newArray.push(this[i]);
  }
  return newArray;
};

const products = [
  { name: "Notebook", price: 2499, fragile: true },
  { name: "iPad Pro", price: 4199, fragile: true },
  { name: "Mug", price: 12.49, fragile: true },
  { name: "Pencil", price: 1.49, fragile: false }
];

const result = products.filter2(e => e.price > 500).filter2(e => e.fragile);

console.log("--- Expensive and fragile: ---");
console.log(result);
