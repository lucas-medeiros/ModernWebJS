const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const employees = [];

const getChineseWomanWithLowerSalary = () =>
  employees
    .filter(e => e.pais === "China" && e.genero === "F")
    .sort((a, b) => a.salario - b.salario)[0];

const getData = () => {
  axios
    .get(url)
    .then(response => {
      response.data.forEach(e => employees.push(e));
      const result = getChineseWomanWithLowerSalary();
      console.log("result :>> ", result);
    })
    .catch(error => {
      console.error(error);
    });
};

getData();
