"use strict";
const {Validator} = require("uu_appg01_server").Validation;
const {DaoFactory, ObjectStoreError} = require("uu_appg01_server").ObjectStore;
const {ValidationHelper} = require("uu_appg01_server").AppServer;
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
      Errors.SetState.SubjectTermManInstanceDoesNotExist,
      Errors.SetState.SubjectTermManInstanceNotInProperState
    );

    let validationResult = this.validator.validate("subjectTermSetStateDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.updateUnsupportedKeys.code,
      Errors.SetState.InvalidDtoIn
    );

    let subjectTermFilter = {
      awid: awid,
      id: dtoIn.id,
    };

    let subjectTerm = await this.dao.get(subjectTermFilter);

    if (!subjectTerm) {
      throw new Errors.SetState.SubjectTermDoesNotExist({uuAppErrorMap}, {subjectTermId: dtoIn.id});
    }

    try {
      subjectTerm = await this.dao.setState(subjectTermFilter, dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {

        throw new Errors.SetState.SubjectTermDaoUpdateFailed({uuAppErrorMap}, e);
      }
      throw e;
    }

    subjectTerm.uuAppErrorMap = uuAppErrorMap;
    return subjectTerm;
  }

  async deleteStudent(awid, dtoIn) {
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      Errors.DeleteStudent.SubjectTermManInstanceDoesNotExist,
      Errors.DeleteStudent.SubjectTermManInstanceNotInProperState
    );

    let validationResult = this.validator.validate("subjectTermDeleteStudentDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.deleteUnsupportedKeys.code,
      Errors.DeleteStudent.InvalidDtoIn);

    let subjectTermFilter = {
      awid: awid,
      id: dtoIn.id,
    };

    let subjectTerm = await this.dao.get(subjectTermFilter);

    if (!subjectTerm) {
      throw new Errors.DeleteStudent.SubjectTermDoesNotExist({uuAppErrorMap}, {activityId: dtoIn.id});
    }

    dtoIn.awid = awid;

    try {
      subjectTerm = await this.dao.deleteStudent(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {

        throw new Errors.DeleteStudent.SubjectTermDaoDeleteStudentFailed({uuAppErrorMap}, e);
      }
      throw e;
    }

    subjectTerm.uuAppErrorMap = uuAppErrorMap;
    return subjectTerm;

  }

  async addStudent(awid, dtoIn) {
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      Errors.AddStudent.SubjectTermManInstanceDoesNotExist,
      Errors.AddStudent.SubjectTermManInstanceNotInProperState
    );

    let validationResult = this.validator.validate("activityAddStudentDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys.code,
      Errors.AddStudent.InvalidDtoIn);

    let subjectTermFilter = {
      awid: awid,
      id: dtoIn.id,
    };

    let subjectTerm = await this.dao.get(subjectTermFilter);

    if (!subjectTerm) {
      throw new Errors.AddStudent.SubjectTermDoesNotExist({uuAppErrorMap}, {activityId: dtoIn.id});
    }

    try {
      subjectTerm = await this.dao.addStudent(subjectTermFilter, dtoIn.studentId);
    } catch (e) {
      if (e instanceof ObjectStoreError) {

        throw new Errors.AddStudent.SubjectTermDaoAddStudentFailed({uuAppErrorMap}, e);
      }
      throw e;
    }

    subjectTerm.uuAppErrorMap = uuAppErrorMap;
    return subjectTerm;
  }

  async list(awid, dtoIn) {
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      Errors.List.SubjectTermManInstanceDoesNotExist,
      Errors.List.SubjectTermManInstanceNotInProperState
    );

    let validationResult = this.validator.validate("subjectTermListDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.listUnsupportedKeys.code,
      Errors.List.InvalidDtoIn);

    dtoIn.sortBy = DEFAULTS.sortBy;
    if (!dtoIn.order) dtoIn.order = DEFAULTS.order;
    if (!dtoIn.pageInfo) dtoIn.pageInfo = {};
    if (!dtoIn.pageInfo.pageSize) dtoIn.pageInfo.pageSize = DEFAULTS.pageSize;
    if (!dtoIn.pageInfo.pageIndex) dtoIn.pageInfo.pageIndex = DEFAULTS.pageIndex;

    let list = await this.dao.list(awid, dtoIn.sortBy, dtoIn.order, dtoIn.pageInfo);

    list.uuAppErrorMap = uuAppErrorMap;
    return list;

  }

  async delete(awid, dtoIn) {
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      Errors.Delete.SubjectTermManInstanceDoesNotExist,
      Errors.Delete.SubjectTermManInstanceNotInProperState
    );

    let validationResult = this.validator.validate("subjectTermDeleteDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.deleteUnsupportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );

    let subjectTermFilter = {
      awid: awid,
      id: dtoIn.id,
    };

    let subjectTerm = await this.dao.get(subjectTermFilter);
    if (!subjectTerm) {
      throw new Errors.Delete.SubjectTermDoesNotExist({uuAppErrorMap}, {activityId: dtoIn.id});
    }

    await this.dao.delete(subjectTermFilter);

    return {uuAppErrorMap};

  }

  async create(awid, dtoIn) {
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      Errors.Create.SubjectTermManInstanceDoesNotExist,
      Errors.Create.SubjectTermManInstanceNotInProperState
    );

    let validationResult = this.validator.validate("subjectTermDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn);

    dtoIn.awid = awid;
    dtoIn.lifeCycleState = "Planned";

    let subjectTerm;

    try {
      subjectTerm = await this.dao.create(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {

        throw new Errors.Create.SubjectTermDaoCreateFailed({uuAppErrorMap}, e);
      }
      throw e;
    }
    subjectTerm.uuAppErrorMap = uuAppErrorMap;

    return subjectTerm;
  }

}

module.exports = new SubjectTermAbl();
