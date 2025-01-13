const school = (() => {
  const students = [];
  const VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th'];

  function getCourse(student, courseName) {
    return student.listCourses().filter(({name}) => name === courseName)[0];
  }
  
  return {
    addStudent(name, year) {
      const validYear = (() => {
        if (!VALID_YEARS.includes(year)) {
          return console.log('Invalid Year');
        }
      })();

      const student = createStudent(name, year);
      students.push(student);
      return student;
    },

    enrollStudent(student, courseName, courseCode) {
      student.addCourse({name: courseName, code: courseCode})
    },

    addGrade(student, courseName, grade) {
      const course = getCourse(student, courseName);

      if (course) {
        course.grade = grade;
      }
    },

    getReportCard(student) {
      student.listCourses().forEach(({grade, name}) => {
        if (grade) {
          console.log(`${name}: ${String(grade)}`);
        } else {
          console.log(`${name}: In progress`);
        }
      });
    },

    courseReport(courseName) {
      const courseStudents = students.map(student => {
        const course = getCourse(student, courseName) || { grade: undefined };
        return { name: student.name, grade: course.grade };
      }).filter(({grade}) => grade);

      if (courseStudents.length > 0) {
        console.log(`=${courseName} Grades=`);

        const average = courseStudents.reduce((total, {name, grade}) => {
          console.log(`${name}: ${String(grade)}`);
          return total + grade;
        }, 0) / courseStudents.length;

        console.log('---');
        console.log(`Course Average: ${String(average)}`);
      }
    },
  };
})();

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student.`);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      return this.courses;
    },

    addNote(code, note) {
      const course = this.courses.find(course => course.code === code);

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      } else {
        console.log('Course does not exist.');
      }
    },

    updateNote(code, note) {
      const course = this.courses.find(course => course.code === code);

      if (course) {
        course.note = note;
      } else {
        console.log('Course does not exist.');
      }
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },
  };
}

const math = { name: 'Math', code: 101 };
const advancedMath = { name: 'Advanced Math', code: 102 };
const physics = { name: 'Physics', code: 202 };

const paul = school.addStudent('Paul', '3rd');
const mary = school.addStudent('Mary', '1st');
const kim = school.addStudent('Kim', '2nd');

[math, advancedMath, physics].forEach(course => {
  school.enrollStudent(paul, course.name, course.code);
});

school.enrollStudent(mary, math.name, math.code);

[math, advancedMath].forEach(course => {
  school.enrollStudent(kim, course.name, course.code);
});

school.addGrade(paul, 'Math', 95);
school.addGrade(paul, 'Advanced Math', 90);
school.addGrade(mary, 'Math', 91);
school.addGrade(kim, 'Math', 93);
school.addGrade(kim, 'Advanced Math', 90);

// console.log(school.students);

school.getReportCard(paul);
school.courseReport('Math');
 