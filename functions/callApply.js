function getPrice(tax = 0, currency = "R$") {
  return `${currency} ${this.price * (1 - this.desc) * (1 + tax)}`;
}

const product = {
  name: "Notebook",
  price: 4589,
  desc: 0.15,
  getPrice
};

global.price = 20;
global.desc = 0.1;
console.log(getPrice());
console.log(product.getPrice());

const car = { price: 49990, desc: 0.2 };

console.log(getPrice.call(car));
console.log(getPrice.apply(car));

console.log(getPrice.call(car, 0.17, "$"));
console.log(getPrice.apply(car, [0.17, "$"]));
