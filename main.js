'use strict';
const students = [
  { name: "Иван", score: 120 },
  { name: "Мария", score: 95 },
  { name: "Алексей", score: 150 },
  { name: "Светлана", score: 80 },
  { name: "Дмитрий", score: 101 }
];

function getPassingStudents(studentsList, passingScore) {
  return studentsList.filter(student => student.score >= passingScore);
}
const passingScore = 100;
const passingStudents = getPassingStudents(students, passingScore);

console.log("Все студенты:", students);
console.log(`Студенты, сдавшие экзамен (балл >= ${passingScore}):`, passingStudents);