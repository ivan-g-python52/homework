'use strict';
const students = [
  { name: "Иван", grades: [5, 4, 3, 5] },
  { name: "Мария", grades: [5, 5, 5, 4] },
  { name: "Алексей", grades: [3, 3, 4, 3] }
];

function calculateAverage(grades) {
  const sum = grades.reduce((total, grade) => total + grade, 0);
  return sum / grades.length;
}
function getStudentReport(studentsList) {
  return studentsList.map(student => ({
    name: student.name,
    averageGrade: calculateAverage(student.grades)
  }));
}
console.log(getStudentReport(students));