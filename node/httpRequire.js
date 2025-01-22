const moduleA = require("./module1");

console.log(moduleA.hello);

const http = require("http");
http
  .createServer((req, res) => {
    res.write(moduleA.hello);
    res.end();
  })
  .listen(8080);
