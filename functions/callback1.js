const companies = ["Mercedes", "Audi", "BMW"];

function print(name, index) {
  console.log(`${index + 1}. ${name}`);
}

companies.forEach(print);
companies.forEach(el => console.log(el));
