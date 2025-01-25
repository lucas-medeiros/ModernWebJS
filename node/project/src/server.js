const port = 3003;
const express = require("express");
const app = express();


app.get("/products", (req, res, next) => {
  console.log("Middleware 1...");
  next();
});

app.get("/products", (req, res, next) => {
  res.send({ name: "Notebook", price: 1249.99 });
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
