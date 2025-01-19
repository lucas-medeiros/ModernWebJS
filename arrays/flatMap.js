const school = [
  {
    name: "M1",
    students: [
      {
        name: "John",
        grade: 8.1
      },
      {
        name: "Anne",
        grade: 9.3
      }
    ]
  },
  {
    name: "M2",
    students: [
      {
        name: "Luke",
        grade: 8.9
      },
      {
        name: "Marie",
        grade: 7.3
      }
    ]
  }
];

// Get array of grades
const grades = school.flatMap(e => e.students).map(e => e.grade);
console.log(grades);
