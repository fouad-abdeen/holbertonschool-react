import Teacher from "./Teacher";

namespace Subjects {
  class Subject {
    constructor(private teacher: Teacher) {}

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}

export default Subjects;
