function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let number = 0;

while (number != -1) {
  number = getRandomInt(-1, 10);
  console.log("Number: " + number);
}

console.log("end process!");
