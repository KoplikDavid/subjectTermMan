"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/subject-term-error.js");
const SubjecttermmanTeam11Abl = require("./subjecttermman-team11-abl");

const WARNINGS = {
  createUnsupportedKeys: {
    code: `${Errors.Create.UC_CODE}unsupportedKeys`
  },
  listUnsupportedKeys: {
    code: `${Errors.List.UC_CODE}unsupportedKeys`
  },
  deleteUnsupportedKeys: {
    code: `${Errors.Delete.UC_CODE}unsupportedKeys`
  },
  updateUnsupportedKeys: {
    code: `${Errors.SetState.UC_CODE}unsupportedKeys`
  }
};

const DEFAULTS = {
  order: "asc",
  pageIndex: 0,
  pageSize: 100,
  sortBy: "subjectTermId"
};

class SubjectTermAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("subjectTerm");
  }

  async setState(awid, dtoIn) {
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      Errors.SetState.SubjectTermInstanceDoesNotExist,
      Errors.SetState.SubjectTermInstanceNotInProperState
    );

  }

  async deleteStudent(awid, dtoIn) {
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      Errors.DeleteStudent.SubjectTermInstanceDoesNotExist,
      Errors.DeleteStudent.SubjectTermInstanceNotInProperState
    );

  }

  async addStudent(awid, dtoIn) {
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      Errors.AddStudent.SubjectTermInstanceDoesNotExist,
      Errors.AddStudent.SubjectTermInstanceNotInProperState
    );

  }

  async list(awid, dtoIn) {
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      Errors.List.SubjectTermInstanceDoesNotExist,
      Errors.List.SubjectTermInstanceNotInProperState
    );

  }

  async delete(awid, dtoIn) {
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      Errors.Delete.SubjectTermInstanceDoesNotExist,
      Errors.Delete.SubjectTermInstanceNotInProperState
    );

  }

  async create(awid, dtoIn, session, authorizationResult) {
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      Errors.Create.SubjectTermInstanceDoesNotExist,
      Errors.Create.SubjectTermInstanceNotInProperState
    );

    let validationResult = this.validator.validate("subjectTermDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn);

    dtoIn.awid = awid;
    dtoIn.lifeCycleState ="planned";

    let subjectTerm;

    try {
      subjectTerm = await this.dao.create(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {

        throw new Errors.Create.SubjectTermDaoCreateFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }
    subjectTerm.uuAppErrorMap = uuAppErrorMap;

    return subjectTerm;
  }

}

module.exports = new SubjectTermAbl();
