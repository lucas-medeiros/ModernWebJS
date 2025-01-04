class Car {
  constructor(wheels) {
    this.wheels = wheels;
  }
}

class Fiat extends Car {
  constructor(wheels, brand = "Fiat") {
    super(wheels);
    this.brand = brand;
  }
}

class Uno extends Fiat {
  constructor(wheels, brand, model = "Uno") {
    super(wheels, brand);
    this.model = model;
  }
}

const car = new Uno(4);
console.log(car);
