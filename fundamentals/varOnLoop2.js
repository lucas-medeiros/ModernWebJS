const funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i);
  });
}

funcs[2](); // imprime 10 - pq 'var' não tem escopo de função, por isso pega o ultimo valor atualizado globalmente de 'i';
funcs[8]();
