"use strict";

let student1 = {
  id: "1",
    awid: "22222222222222222222222222222222",
  sys: {
  cTs: "2021-01-24T23:17:32.640Z",
    mTs: "2021-01-24T23:44:21.456Z",
    rev: 0
},
  UuIdentity: "22-8811-1",
    name: "David Koplík",
};

let student2 = {
  id: "2",
  awid: "22222222222222222222222222222222",
  sys: {
    cTs: "2021-01-24T23:17:32.640Z",
    mTs: "2021-01-24T23:44:21.456Z",
    rev: 0
  },
  UuIdentity: "15-3513-1",
  name: "Jack Ryan",
};

let student3 = {
  id: "3",
  awid: "22222222222222222222222222222222",
  sys: {
    cTs: "2021-01-24T23:17:32.640Z",
    mTs: "2021-01-24T23:44:21.456Z",
    rev: 0
  },
  UuIdentity: "24-9596-1",
  name: "Martin Weber",
};

let student4 = {
  id: "4",
  awid: "22222222222222222222222222222222",
  sys: {
    cTs: "2021-01-24T23:17:32.640Z",
    mTs: "2021-01-24T23:44:21.456Z",
    rev: 0
  },
  UuIdentity: "24-9595-1",
  name: "Denis Krišťák",
};



const enrolledStudents = {
  "SD2018": [student1,student2,student3,student4],
  "SD2019": [student1,student2],
  "SD2020": [student3,student4]
};

const subject1 ={
  id: "1",
    awid: "22222222222222222222222222222222",
  sys: {
  cTs: "2021-01-24T23:17:32.640Z",
    mTs: "2021-01-24T23:44:21.456Z",
    rev: 0
},
  subjectCode: "BBSY19A20W",
  subjectName: "Backendové systémy (verze 2019)"
};

const subject2 ={
  id: "2",
  awid: "22222222222222222222222222222222",
  sys: {
    cTs: "2021-01-24T23:17:32.640Z",
    mTs: "2021-01-24T23:44:21.456Z",
    rev: 0
  },
  subjectCode: "BPMI19A20W",
  subjectName: "Projektový management (verze 2019)"
};

const subjects ={
  "BBSY2020-1": subject1,
  "BPMI19A20W": subject2
}

module.exports = {
  enrolledStudents,
  subjects
}
