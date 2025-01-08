const names = ["Bia", "John", "Luke"];

names.forEach(function(name, index) {
  console.log(`${index + 1}: ${name}`);
});

names.forEach(e => console.log(e));

const showName = name => console.log(name);
names.forEach(showName);
