const products = [
  { name: "Notebook", price: 2499, fragile: true },
  { name: "iPad Pro", price: 4199, fragile: true },
  { name: "Mug", price: 12.49, fragile: true },
  { name: "Pencil", price: 1.49, fragile: false }
];

console.log(products.filter(e => false));
console.log(products.filter(e => true));
console.log(products.filter(e => e.price > 2000));

// Expensive and fragile
const result = products.filter(e => e.price > 500).filter(e => e.fragile);

console.log("--- Expensive and fragile: ---");
console.log(result);
