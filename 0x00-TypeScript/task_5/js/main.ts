interface MajorCredits {
  credits: number;
  _MajorCredits: void;
}

interface MinorCredits {
  credits: number;
  _MinorCredits: void;
}

const sumMajorCredits = (subject1: number, subject2: number): MajorCredits =>
  ({
    credits: subject1 + subject2,
  } as MajorCredits);

const sumMinorCredits = (subject1: number, subject2: number): MinorCredits =>
  ({
    credits: subject1 + subject2,
  } as MinorCredits);
