Array.prototype.map2 = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

const products = [
  '{ "name": "Product1", "price": 3.45 }',
  '{ "name": "Product2", "price": 13.90 }',
  '{ "name": "Product3", "price": 41.22 }',
  '{ "name": "Product4", "price": 7.50 }'
];

//Prices array
const prices = products.map2(e => JSON.parse(e).price);
console.log(prices);
