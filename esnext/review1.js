// let
{
  let b = 1;
  console.log("b :>> ", b);
}

// Template string
const name = "Lucas";
console.log(`Good morning ${name}!`);

// Desctructuring
const [a, b, ...word] = "Lucas";
console.log(a, b, word);

const { x: value1, y: value2 } = { x: 1, y: 10 };
console.log(value1, value2);
