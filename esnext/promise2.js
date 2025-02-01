function getNumberBetween(min, max) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise(resolve => {
    const factor = max - min + 1;
    const random = parseInt(Math.random() * factor + min);
    resolve(random);
  });
}

getNumberBetween(1, 60)
  .then(e => e * 10)
  .then(e => `Result number: ${e}`)
  .then(console.log)
  .catch(e => console.log("e :>> ", e));
