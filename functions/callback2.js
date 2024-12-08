const grades = [7.7, 6.5, 5.2, 8.9, 3.9, 7.1, 9.8];

// no callback
let lowGrades = [];
for (let i in grades) {
  if (grades[i] < 7) {
    lowGrades.push(grades[i]);
  }
}

console.log(lowGrades);

// using callback
lowGrades = grades.filter(function(grade) {
  return grade < 7;
});

console.log(lowGrades);

// using callback and arrow function
lowGrades = grades.filter(grade => grade < 7);

console.log(lowGrades);

// using callback and arrow function from variable
const lowGradeFilter = grade => grade < 7;
lowGrades = grades.filter(lowGradeFilter);

console.log(lowGrades);
