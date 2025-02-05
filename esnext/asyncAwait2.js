const { at } = require("lodash");

const getNumberBetween = (min, max, forbidden) => {
  if (min > max) [max, min] = [min, max];
  return new Promise((resolve, reject) => {
    const factor = max - min + 1;
    const random = parseInt(Math.random() * factor) + min;
    if (forbidden.includes(random)) {
      reject("Duplicated number");
    } else {
      resolve(random);
    }
  });
};

const getLotteryNumbers = async (count, attempts = 1) => {
  try {
    const numbers = [];
    for (_ of Array(count).fill()) {
      numbers.push(await getNumberBetween(1, 60, numbers));
    }

    return numbers;
  } catch (error) {
    if (attempts > 10) {
      console.log("Error");
      throw error;
    }

    getLotteryNumbers(count, attempts + 1);
  }
};

getLotteryNumbers(10).then(console.log).catch(console.log);
