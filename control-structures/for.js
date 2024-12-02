let count = 1;
while (count <= 10) {
  console.log("Count: " + count);
  count++;
}

for (let i = 1; i <= 10; i++) {
  console.log("i: " + i);
}

const array = [6.7, 7.4, 9.8, 8.1, 7.7];
for (let i = 0; i < array.length; i++) {
  console.log(`array[${i}]: ${array[i]}`);
}

for (let i in array) {
  console.log(`array[${i}]: ${array[i]}`);
}

const person = {
  name: "Lucas",
  lastName: "Medeiros",
  age: 25
};

for (const att in person) {
  console.log(`${att} = ${person[att]}`);
}
