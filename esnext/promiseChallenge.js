const fs = require("fs");

const path = __dirname + "/data.txt";

const readFile = path => {
  return new Promise((resolve, reject) => {
    try {
      fs.readFile(path, function(_, content) {
        resolve(content.toString());
      });
      console.log("File read finish");
    } catch (error) {
      reject(error);
    }
  });
};

readFile(path)
  .then(e => e.split("\n"))
  .then(e => e.map(str => str.replace("\r", "")))
  .then(e => console.log("e :>> ", e))
  .catch(e => console.log("error :>> ", e));
