const GRADING_SCALE = { 100: 'A', 90: 'A', 80: 'B', 70: 'C', 60: 'D' };

function getGrade(...grades) {
  let avgGrade = grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
  let gradeInTens = String(Math.floor(avgGrade / 10) * 10);

  return GRADING_SCALE[gradeInTens] || 'F';
}

console.log(getGrade(100, 100, 100) === "A");
console.log(getGrade(95, 90, 93) === "A");
console.log(getGrade(50, 50, 95) === "D");
console.log(getGrade(50, 50, 60) === "F");