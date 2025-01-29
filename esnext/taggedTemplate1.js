function tag(parts, ...values) {
  console.log("parts :>> ", parts);
  console.log("values :>> ", values);
  return "Another string";
}

const student = "Gui";
const status = "Approved";
console.log(tag`${student} is ${status}`);
