const even = [2, 4, 6, 8];
const odd = [1, 3, 5, 7, 9];
const nums = even.concat(odd, 0);
console.log(nums);
console.log(nums.sort());

console.log(["a", "b"].concat([1, 2], [3, 4], 5, [[6, 7]]));
