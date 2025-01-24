const fs = require("fs");

const product = {
  name: "phone",
  price: 1249.99,
  discount: 0.15
};

fs.writeFile(__dirname + "/result-file.json", JSON.stringify(product), err => {
  console.log(err || "File generated!");
});
