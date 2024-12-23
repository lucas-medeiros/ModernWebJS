// prototype chain
Object.prototype.attr0 = "0";
const grandparent = { attr1: "A" };
const parent = { __proto__: grandparent, attr2: "B", attr3: "3" };
const children = { __proto__: parent, attr3: "C" };

console.log(children.attr0, children.attr1, children.attr2, children.attr3);

const car = {
  currentSpeed: 0,
  maxSpeed: 200,
  accelerate(delta) {
    if (this.currentSpeed + delta <= this.maxSpeed) {
      this.currentSpeed += delta;
    } else {
      this.currentSpeed = this.maxSpeed;
    }
  },
  status() {
    return `${this.currentSpeed} km/h / ${this.maxSpeed} km/h`;
  }
};

const ferrari = {
  model: "f40",
  maxSpeed: 320
};

const volvo = {
  model: "v40",
  status() {
    return `${this.model}: ${super.status()} km/h`;
  }
};

Object.setPrototypeOf(ferrari, car);
Object.setPrototypeOf(volvo, car);

console.log(ferrari);
console.log(volvo);

volvo.accelerate(100);
console.log(volvo.status());

ferrari.accelerate(100);
console.log(ferrari.status());
