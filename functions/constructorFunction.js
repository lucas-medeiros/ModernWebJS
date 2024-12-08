function Car(maxSpeed = 200, delta = 5) {
  let currentSpeed = 0; // private attribute

  this.accelerate = function() {
    // public method
    if (currentSpeed + delta <= maxSpeed) {
      currentSpeed += delta;
    } else {
      currentSpeed = maxSpeed;
    }
  };

  this.getCurrentSpeed = function() {
    // public method
    return currentSpeed;
  };
}

const car = new Car();

car.accelerate();
console.log(car.getCurrentSpeed());

const ferrarri = new Car(350, 20);
ferrarri.accelerate();
ferrarri.accelerate();
ferrarri.accelerate();
console.log(ferrarri.getCurrentSpeed());
