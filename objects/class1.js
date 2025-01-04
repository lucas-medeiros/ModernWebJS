class Product {
  constructor(name = "Generic name", value = 0) {
    this.name = name;
    this.value = value;
  }
}

class Stock {
  constructor(month, year) {
    this.month = month;
    this.year = year;
    this.products = [];
  }

  addProducts(...products) {
    products.forEach(e => this.products.push(e));
  }

  summary() {
    let consolidatedValue = 0;
    this.products.forEach(e => {
      consolidatedValue += e.value;
    });
    return consolidatedValue;
  }
}

const notebook = new Product("Notebook", 2500);
const ipad = new Product("iPad", 3500);

const stock = new Stock(1, 2025);
stock.addProducts(notebook, ipad);
console.log(stock.summary());
