const seq = {
  _value: 1, // convention
  get value() {
    return this._value++;
  },
  set value(value) {
    if (value > this._value) this._value = value;
  }
};

console.log(seq.value, seq.value);
seq.value = 1000;
console.log(seq.value, seq.value);
seq.value = 900;
console.log(seq.value, seq.value);
