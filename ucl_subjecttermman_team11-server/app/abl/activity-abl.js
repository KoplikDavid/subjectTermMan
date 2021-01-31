"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory, ObjectStoreError } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/activity-error.js");
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
  }
};

const DEFAULTS = {
  order: "asc",
  pageIndex: 0,
  pageSize: 100,
  sortBy: "subjectTermId"
};

class ActivityAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("activity");
  }

  async deleteStudent(awid, dtoIn) {
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      Errors.DeleteStudent.SubjectTermInstanceDoesNotExist,
      Errors.DeleteStudent.SubjectTermInstanceNotInProperState
    );

    let validationResult = this.validator.validate("activityAddStudentDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys.code,
      Errors.DeleteStudent.InvalidDtoIn);

    let activityFilter = {
      awid: awid,
      id: dtoIn.id,
    };

    let activity = await this.dao.get(activityFilter);

    if (!activity) {
      throw new Errors.DeleteStudent.ActivityDoesNotExist({ uuAppErrorMap }, { activityId: dtoIn.id });
    }

    dtoIn.awid=awid;

    try {
      activity = await this.dao.deleteStudent(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {

        throw new Errors.DeleteStudent.ActivityDaoDeleteStudentFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }

    activity.uuAppErrorMap = uuAppErrorMap;
    return activity;
  }

  async addStudent(awid, dtoIn) {
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      Errors.AddStudent.SubjectTermInstanceDoesNotExist,
      Errors.AddStudent.SubjectTermInstanceNotInProperState
    );

    let validationResult = this.validator.validate("activityAddStudentDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys.code,
      Errors.AddStudent.InvalidDtoIn);

    let activityFilter = {
      awid: awid,
      id: dtoIn.id,
    };

    let activity = await this.dao.get(activityFilter);

    if (!activity) {
      throw new Errors.AddStudent.ActivityDoesNotExist({ uuAppErrorMap }, { activityId: dtoIn.id });
    }

    let newStudent = {
      studentId: dtoIn.studentId,
      score: 0
    }

    try {
      activity = await this.dao.addStudent(activityFilter,newStudent);
    } catch (e) {
      if (e instanceof ObjectStoreError) {

        throw new Errors.AddStudent.ActivityDaoAddStudentFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }

    activity.uuAppErrorMap = uuAppErrorMap;
    return activity;

  }

  async create(awid, dtoIn, session, authorizationResult) {
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      Errors.Create.SubjectTermInstanceDoesNotExist,
      Errors.Create.SubjectTermInstanceNotInProperState
    );

    let validationResult = this.validator.validate("activityCreateDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn);

    dtoIn.uuIdentity = session.getIdentity().getUuIdentity();
    dtoIn.uuIdentityName = session.getIdentity().getName();
    dtoIn.awid = awid;
    dtoIn.lifeCycleState= "planned";
    if (!dtoIn.activityLink) dtoIn.activityLink = "add link please";

    let activity;

    try {
      activity = await this.dao.create(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {

        throw new Errors.Create.ActivityDaoCreateFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }
    activity.uuAppErrorMap = uuAppErrorMap;

    return activity;
  }

  async delete(awid, dtoIn, session, authorizationResult) {
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      Errors.Delete.SubjectTermInstanceDoesNotExist,
      Errors.Delete.SubjectTermInstanceNotInProperState
    );

    let validationResult = this.validator.validate("activityDeleteDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.deleteUnsupportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );

    let activity = {
      awid: awid,
      id: dtoIn.id,
    };

    let daoActivity = await this.dao.get(activity);
    if (!daoActivity) {
      throw new Errors.Delete.ActivityDoesNotExist({ uuAppErrorMap }, { activityId: dtoIn.id });
    }

    await this.dao.delete(activity);

    return { uuAppErrorMap };
  }

  async list(awid, dtoIn, authorizationResult) {
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      Errors.Delete.SubjectTermInstanceDoesNotExist,
      Errors.Delete.SubjectTermInstanceNotInProperState
    );

    let validationResult = this.validator.validate("activityListDtoInType", dtoIn);

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

    let filter ={
      awid: awid,
      subjectTermId: dtoIn.subjectTermId
    }

    let list = await this.dao.list(filter, dtoIn.sortBy, dtoIn.order, dtoIn.pageInfo);

    list.uuAppErrorMap = uuAppErrorMap;
    return list;
  }

}

module.exports = new ActivityAbl();
