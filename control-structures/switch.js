const printResult = function(grade) {
  switch (Math.floor(grade)) {
    case 10:
    case 9:
      console.log("Congratulations!");
      break;
    case 8:
    case 7:
      console.log("Approved!");
      break;
    case 6:
    case 5:
    case 4:
      console.log("Final test!");
      break;
    case 3:
    case 2:
    case 1:
    case 0:
      console.log("Rejected!");
      break;
    default:
      console.log("Invalid grade!");
  }
};

printResult(10);
printResult(9.9);
printResult(7.5);
printResult(7.1);
printResult(5.5);
printResult(3.5);
printResult(0);
printResult(-6);
printResult(15);
