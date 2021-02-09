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

interface printTeacherFunction {}

let printTeacher: printTeacherFunction;

printTeacher = (firstName: string, lastName: string) => {
  let fl = firstName.slice(0, 1);
  return `${fl}. ${lastName}`;
};
