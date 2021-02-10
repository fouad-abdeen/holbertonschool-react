interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }
  getCoffeeBreak() {
    return "Getting a coffee break";
  }
  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }
  getCoffeeBreak() {
    return "Cannot have a break";
  }
  workTeacherTasks() {
    return "Getting to work";
  }
}

interface ICreateEmployee {
  (salary: number | string): Teacher | Director;
}

const createEmployee: ICreateEmployee = (salary) => {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
};

const isDirector = (employee: any) => {
  if (employee instanceof Director) {
    return "Employee is a Director";
  } else {
    return "Employee isn't a Director";
  }
};

const executeWork = (employee: Director | Teacher) => {
  if (employee instanceof Director) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
};

type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects) => {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
};
