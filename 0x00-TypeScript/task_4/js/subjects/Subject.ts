/// <reference path="./Teacher.ts" />

namespace Subjects {
  class Subject {
    constructor(private teacher: Teacher) {}

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}

export default Subjects;
