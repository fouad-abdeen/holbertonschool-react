interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let studentsList: Student[] = [];
let s1 = {
  firstName: "Fouad",
  lastName: "Abdeen",
  age: 20,
  location: "El Mina",
};
let s2 = {
  firstName: "Layla",
  lastName: "Hammoud",
  age: 19,
  location: "Tripoli",
};

let registerStudent = (student: Student) => {
  studentsList.push(student);
  console.log(student);
  console.log(studentsList);
};

registerStudent(s1);
registerStudent(s2);

let tbl = document.createElement("table");

for (const s of studentsList) {
  let rw = document.createElement("tr");
  rw.innerHTML = `<td> ${s.firstName} - ${s.location} </td>`;
  tbl.appendChild(rw);
}
