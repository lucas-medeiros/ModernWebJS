function calculate(width, height) {
  const area = height * width;
  if (area > 20) {
    console.log(`Value above allowed perimeter: ${area}m2.`);
  } else {
    return area;
  }
}

console.log(calculate(2, 2));
console.log(calculate(2));
console.log(calculate());
console.log(calculate(2, 3, 17, 22, 44));
console.log(calculate(5, 5));
