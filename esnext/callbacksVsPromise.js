const url = "http://files.cod3r.com.br/curso-js/";
const http = require("http");

// Using only callbacks => No promise
const getStudents = (name, callback) => {
  const path = url + "turma" + name + ".json";
  http.get(path, res => {
    let result = "";
    res.on("data", data => {
      result += data;
    });
    res.on("end", () => {
      callback(JSON.parse(result));
    });
  });
};

let names = [];
getStudents("A", students => {
  names = names.concat(students.map(e => `A: ${e.nome}`));
  getStudents("B", students => {
    names = names.concat(students.map(e => `B: ${e.nome}`));
    getStudents("C", students => {
      names = names.concat(students.map(e => `C: ${e.nome}`));
      console.log("names :>> ", names);
    });
  });
});

// ------------------------------------------------------------
// Same thing but with promise
const axios = require("axios");

// Using only callbacks => No promise
const getStudentsWithPromise = name => {
  const path = url + "turma" + name + ".json";
  return new Promise((resolve, reject) => {
    http.get(path, res => {
      let result = "";
      res.on("data", data => {
        result += data;
      });
      res.on("end", () => {
        try {
          resolve(JSON.parse(result));
        } catch (error) {
          reject(error);
        }
      });
    });
  });
};

names = [];
Promise.all([
  getStudentsWithPromise("A"),
  getStudentsWithPromise("B"),
  getStudentsWithPromise("C")
])
  .then(e => [].concat(...e))
  .then(e => e.map(el => el.nome))
  .then(e => console.log("e :>> ", e))
  .catch(error => console.log("error :>> ", error));
