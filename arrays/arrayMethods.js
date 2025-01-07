const pilots = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilots.pop();
console.log(pilots);

pilots.push("Verstappen");
console.log(pilots);

pilots.shift(); // remove first
console.log(pilots);

pilots.unshift("Hamilton");
console.log(pilots);

// splice can add and remove elements
//add
pilots.splice(2, 0, "Bottas", "Massa");
console.log(pilots);

// remove
pilots.splice(3, 1);
console.log(pilots);

const somePilots1 = pilots.slice(2);
console.log(somePilots1);

const somePilots2 = pilots.slice(1, 4);
console.log(somePilots2);
