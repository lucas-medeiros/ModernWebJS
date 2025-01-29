// Create a new Set
const namesSet = new Set();

// Array of random person names
const randomNames = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];

// Insert each name into the Set
randomNames.forEach(name => namesSet.add(name));

// Output the Set
console.log(namesSet);
console.log(namesSet.size);
console.log(namesSet.has("Alice"));
namesSet.delete("Alice");
console.log(namesSet.has("Alice"));
namesSet.add("Ethan");
console.log(namesSet);
