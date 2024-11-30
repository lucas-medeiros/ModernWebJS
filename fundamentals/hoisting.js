{
  console.log("a =", a);
  var a = 2;
  console.log("a =", a);
}

// tem o mesmo efeito que:

{
  var a;
  console.log("a =", a);
  a = 2;
  console.log("a =", a);
}

// ao usar let não ocorre o hoisting

console.log("b =", b); // throw ReferenceError
let b = 2;
console.log("b =", b);
