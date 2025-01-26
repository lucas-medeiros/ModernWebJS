const port = 3003;
const database = require("./database");
const express = require("express");
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.get("/products", (req, res, next) => {
  console.log("Middleware 1...");
  next();
});

app.get("/products", (req, res, next) => {
  res.send(database.getProducts());
});

app.get("/product/:id", (req, res, next) => {
  const product = database.getProduct(req.params.id) || {};
  res.send(product);
});

app.post("/product", (req, res, next) => {
  const product = database.saveProduct({
    name: req.body.name,
    price: req.body.price
  });
  res.send(product);
});

app.put("/product/:id", (req, res, next) => {
  const product = database.saveProduct({
    id: req.params.id,
    name: req.body.name,
    price: req.body.price
  });
  res.send(product);
});

app.delete("/product/:id", (req, res, next) => {
  const product = database.deleteProduct(req.params.id);
  res.send(product);
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
