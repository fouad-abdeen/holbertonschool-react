interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

let printTeacher: printTeacherFunction;

printTeacher = (firstName, lastName) => {
  let fl = firstName.slice(0, 1);
  return `${fl}. ${lastName}`;
};

interface StudentConstructor {
  new (firstName: string, lastName: string): IStudent;
}

interface IStudent {
  workOnHomework(): string;
  displayName(): string;
}

const StudentClass: StudentConstructor = class StudentClass
  implements IStudent {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework() {
    return "Currently working";
  }

  displayName() {
    return this.firstName;
  }
};
