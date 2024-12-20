function createCourse(name, code) {
  return {
    name,
    code,
  };
}

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${year} student`);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      return JSON.stringify(this.courses);
    },

    addNote(code, note) {
      const course = this.courses.find(a => a.code === code);
      
      if (course) {
        if (course.note) {
          course.note.push(note);
        } else {
          course.note = [note];
        }
      } else {
        console.log('Course does not exist.');
      }
    },

    updateNote(code, note) {
      const course = this.courses.find(a => a.code === code);

      if (course) {
        course.note = [note];
      } else {
        console.log('Course does not exist.');
      }
    },

    viewNotes() {
      for (let course of this.courses) {
        if (!course.note) continue;
        console.log(`${course.name}: ${course.note.join('; ')}`);
      }
    },
  }
}

const school = {
  students: [],
  courses: [],

  addStudent(name, year) {
    const VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th'];

    if (VALID_YEARS.includes(year)) {
      const student = createStudent(name, year);
      this.students.push(student);

      return student;
    } else {
      console.log('Invalid Year');
    }
  },

  enrollStudent(student, course) {
    student.courses.push({...course});

    if (course.students) {
      course.students.push(student);
    } else {
      course.students = [student];
    }
  },

  addGrade(student, course, grade) {
    const studentCourse = student.courses.find(c => c.code === course.code);
    return studentCourse.grade = grade;
  },

  getReportCard(student) {
    for (let course of student.courses) {
      console.log(`${course.name}: ` + (course.grade ?? 'In progress'));
    }
  },

  courseReport(courseName) {
    
  },
}

const paul = school.addStudent('Paul', '3rd');
// const mary = school.addStudent('Mary', '1st');
// const kim = school.addStudent('Kim', '2nd');

const math = createCourse('Math', 101);
const advancedMath = createCourse('Advanced Math', 102);
const physics = createCourse('Physics', 202);

console.log(paul);

[math, advancedMath, physics].forEach(course => school.enrollStudent(paul, course));

school.addGrade(paul, math, 95);
school.addGrade(paul, advancedMath, 90)

console.log(paul);
school.getReportCard(paul);


// Need to finish