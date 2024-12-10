// Clousure == function scope
// Allows function to use variables from outter scope

const x = "Global";

function outside() {
  const x = "Local";
  function inside() {
    return x;
  }
  return inside;
}

const myFunction = outside();
console.log(myFunction());
