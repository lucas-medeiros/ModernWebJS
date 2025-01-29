const tech = new Map();
tech.set("react", { framework: false });
tech.set("angular", { framework: true });

console.log(tech.react);
console.log(tech.get("react"));
console.log(tech.get("react").framework);

const keys = new Map([
  [function() {}, "Function1"],
  [{}, "Object"],
  [123, "Number"]
]);

console.log(keys.has(123));
keys.delete(123);
console.log(keys.has(123));
console.log(keys.size);

keys.set(123, "a");
keys.set(123, "b");
keys.set(456, "b");
console.log("keys :>> ", keys);
