function createProduct(name, price) {
  return {
    name,
    price,
    discount: 0.1
  };
}

console.log(createProduct("Notebook", 2199.49));
console.log(createProduct("iPad", 1199.49));
