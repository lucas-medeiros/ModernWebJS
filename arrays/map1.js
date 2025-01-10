const nums = [1, 2, 3, 4, 5];

let result = nums.map(e => e * 2);
console.log(result, nums);

const sum10 = e => e + 10;
const triple = e => e * 3;
const money = e => "R$" + parseFloat(e).toFixed(2);

result = nums.map(sum10).map(triple).map(money);
console.log(result);
