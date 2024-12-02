function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let number = -1;
let count = 0;

do {
  number = getRandomInt(-1, 10);
  console.log(`Number: ${number}`);
  count++;
} while (number != -1);

console.log("end process with count: " + count);
