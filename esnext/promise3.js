function getNumberBetween(min, max, delay) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise(resolve => {
    setTimeout(function() {
      const factor = max - min + 1;
      const random = parseInt(Math.random() * factor + min);
      resolve(random);
    }, delay);
  });
}

const getSomeNumbers = () => {
  return Promise.all([
    getNumberBetween(1, 60, 1000),
    getNumberBetween(1, 100, 500),
    getNumberBetween(1, 50, 2000),
    getNumberBetween(1, 1000, 5000)
  ]);
};

console.time("promise");

getSomeNumbers()
  .then(e => console.log("e :>> ", e))
  .then(() => console.timeEnd());
