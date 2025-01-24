const fs = require("fs");

const path = __dirname + "/file.json";

const content = fs.readFileSync(path, "utf-8");
console.log("content :>> ", content);

fs.readFile(path, "utf-8", (error, content) => {
  const config = JSON.parse(content);
  console.log(`${config.db.host}:${config.db.port}`);
});

// Only for JSON
const config = require("./file.json");
console.log("config.db :>> ", config.db);

// Read directory
fs.readdir(__dirname, (err, files) => {
  console.log("files :>> ", files);
});
