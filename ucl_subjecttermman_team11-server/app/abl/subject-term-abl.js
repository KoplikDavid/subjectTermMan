"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/subject-term-error.js");

const WARNINGS = {

};

class SubjectTermAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("subjectTerm");
  }

  async setState(awid, dtoIn) {
    
  }

  async deleteStudent(awid, dtoIn) {
    
  }

  async addStudent(awid, dtoIn) {
    
  }

  async list(awid, dtoIn) {
    
  }

  async delete(awid, dtoIn) {
    
  }

  async create(awid, dtoIn) {
    
  }

}

module.exports = new SubjectTermAbl();
