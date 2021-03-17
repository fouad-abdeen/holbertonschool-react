import { Seq, Map } from 'immutable';

const printBestStudents = (grades) => Seq(Map(grades))
  .filter((x) => x.score > 70)
  .map((x) => x.firstName[0].toUpperCase() + x.firstName.slice(1)
   && x.lastName[0].toUpperCase() + x.lastName.slice(1));

export default printBestStudents;
