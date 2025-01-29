function money(parts, ...values) {
  const result = [];
  values.forEach((value, index) => {
    value = isNaN(value) ? value : `R$${value.toFixed(2)}`;
    result.push(parts[index], value);
  });
  return result.join("");
}

const price = 29.99;
const installment = 11;
console.log(money`1x ${price} or 3x ${installment}`);
