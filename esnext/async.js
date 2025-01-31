const http = require("http");
const url = "http://files.cod3r.com.br/curso-js/";

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

// -----------------------------------------------------
let getStudentsAsync = async () => { // return async function object
  const resultA = await getStudentsWithPromise("A");
  const resultB = await getStudentsWithPromise("A");
  const resultC = await getStudentsWithPromise("A");
  return [].concat(resultA).concat(resultB).concat(resultC);
};

getStudentsAsync()
  .then(students => students.map(e => e.nome))
  .then(e => console.log(e));
