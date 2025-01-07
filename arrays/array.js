console.log(typeof Array, typeof new Array(), typeof []);

let names = new Array("Bia", "John", "Luke");
console.log(names);

names = ["Bia", "John", "Luke"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]); // undefined

names[3] = "Leia";
console.log(names[3]);

names.push("Jody");
console.log(names[4]);

names[9] = "Toast";
console.log(names[8]);
console.log(names[9]);

console.log(names[8] === undefined);
console.log(names.length);
console.log(names);

names.sort();
console.log(names);

delete names[1];
console.log(names[1]);
console.log(names);

names.splice(1, 1, "Name1", "Name2");
console.log(names);
