const printResult = function(grade) {
  if (grade >= 7) {
    console.log("Approved!");
  } else {
    console.log("Rejected!");
  }
};

printResult(10);
printResult(4);
printResult("test");

Number.prototype.between = function(start, end) {
  return this >= start && this <= end;
};

const printResult2 = function(grade) {
  if (grade.between(9, 10)) {
    console.log("Congratulations!");
  } else if (grade.between(7, 8.99)) {
    console.log("Approved!");
  } else if (grade.between(4, 6.99)) {
    console.log("Final test!");
  } else if (grade.between(0, 3.99)) {
    console.log("Rejected!");
  } else {
    console.log("Invalid grade!");
  }
};

printResult2(10);
printResult2(9.9);
printResult2(7.5);
printResult2(7.1);
printResult2(5.5);
printResult2(3.5);
printResult2(0);
printResult2(-6);
printResult2(15);
