Array.prototype.forEach2 = function(callback) {
  for (let i; i < this.length; i++) {
    callback(this[i], i, this);
  }
  return this;
};

const names = ["Bia", "John", "Luke"];
console.log(names);

names.forEach(function(name, index) {
  console.log(`${index + 1}: ${name}`);
});

names.forEach2(function(name, index) {
  console.log(`${index + 1}: ${name}`);
});
