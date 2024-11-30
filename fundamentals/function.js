// Quase tudo é função

console.log(typeof Object);

class Produto {}
console.log(typeof Produto);

// Função 1

// Funcao sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 10, 4, 5, 6, 7, 8);
imprimirSoma();

// Funcao com retorno
function soma(a, b = 1) {
  return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());

// Função 2

// Armazenando uma funcao em uma variavel
const imprimirSoma2 = function(a, b) {
  console.log(a + b);
};

imprimirSoma2(2, 3);

// Armazenando uma funcao arrow em uma variavel
const soma2 = (a, b) => {
  return a + b;
};

console.log(soma2(2, 3));

// retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a);
imprimir2("Legal!!!");
