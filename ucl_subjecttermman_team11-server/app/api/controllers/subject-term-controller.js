"use strict";
const SubjectTermAbl = require("../../abl/subject-term-abl.js");

class SubjectTermController {

  setState(ucEnv) {
    return SubjectTermAbl.setState(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  deleteStudent(ucEnv) {
    return SubjectTermAbl.deleteStudent(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  addStudent(ucEnv) {
    return SubjectTermAbl.addStudent(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  list(ucEnv) {
    return SubjectTermAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  delete(ucEnv) {
    return SubjectTermAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  create(ucEnv) {
    return SubjectTermAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new SubjectTermController();
