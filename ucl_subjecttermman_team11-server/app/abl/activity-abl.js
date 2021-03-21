"use strict";
const {Validator} = require("uu_appg01_server").Validation;
const {DaoFactory, ObjectStoreError} = require("uu_appg01_server").ObjectStore;
const {ValidationHelper} = require("uu_appg01_server").AppServer;
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
  },
  setStateUnsupportedKeys: {
    code: `${Errors.Setstate.UC_CODE}unsupportedKeys`
  },
  setActivityLinkUnsupportedKeys: {
    code: `${Errors.SetActivityLink.UC_CODE}unsupportedKeys`
  },
  assessStudentUnsupportedKeys: {
    code: `${Errors.AssessStudent.UC_CODE}unsupportedKeys`
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

  async assessStudent(awid, dtoIn) {
    // HDS 1
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      // A1, A2
      Errors.AssessStudent.SubjectTermManInstanceDoesNotExist,
      Errors.AssessStudent.SubjectTermManInstanceNotInProperState
    );

    // HDS 2
    let validationResult = this.validator.validate("activityAssessStudentDtoInType", dtoIn);

    // A3, A4
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.assessStudentUnsupportedKeys.code,
      Errors.AssessStudent.InvalidDtoIn
    );

    let activityFilter = {
      awid: awid,
      id: dtoIn.id,
    };

    // HDS 3
    let activity = await this.dao.get(activityFilter);

    // A5
    if (!activity) {
      throw new Errors.AssessStudent.ActivityDoesNotExist({uuAppErrorMap}, {subjectTermId: dtoIn.id});
    }

    // HDS 4
    try {
      activity = await this.dao.assess(activityFilter, dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        // A6
        throw new Errors.AssessStudent.ActivityAssessStudentDaoFailed({uuAppErrorMap}, e);
      }
      throw e;
    }

    activity.uuAppErrorMap = uuAppErrorMap;
    // HDS 5
    return activity;
  }

  async setActivityLink(awid, dtoIn) {
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      Errors.SetActivityLink.SubjectTermManInstanceDoesNotExist,
      Errors.SetActivityLink.SubjectTermManInstanceNotInProperState
    );

    let validationResult = this.validator.validate("activitySetActivityLinkDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.setActivityLinkUnsupportedKeys.code,
      Errors.SetActivityLink.InvalidDtoIn
    );

    let activityFilter = {
      awid: awid,
      id: dtoIn.id,
    };

    let activity = await this.dao.get(activityFilter);

    if (!activity) {
      throw new Errors.SetActivityLink.ActivityDoesNotExist({uuAppErrorMap}, {subjectTermId: dtoIn.id});
    }

    try {
      activity = await this.dao.update(activityFilter, dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {

        throw new Errors.SetActivityLink.ActivityLinkDaoUpdateFailed({uuAppErrorMap}, e);
      }
      throw e;
    }

    activity.uuAppErrorMap = uuAppErrorMap;
    return activity;
  }

  async setstate(awid, dtoIn) {
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      Errors.Setstate.SubjectTermManInstanceDoesNotExist,
      Errors.Setstate.SubjectTermManInstanceNotInProperState
    );

    let validationResult = this.validator.validate("activitySetStateDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.setStateUnsupportedKeys.code,
      Errors.Setstate.InvalidDtoIn
    );

    let activityFilter = {
      awid: awid,
      id: dtoIn.id,
    };

    let activity = await this.dao.get(activityFilter);

    if (!activity) {
      throw new Errors.Setstate.ActivityDoesNotExist({uuAppErrorMap}, {subjectTermId: dtoIn.id});
    }
    let newStudent = {
      studentId: dtoIn.studentId
    }

    try {
      activity = await this.dao.update(activityFilter, newStudent);
    } catch (e) {
      if (e instanceof ObjectStoreError) {

        throw new Errors.Setstate.ActivityLinkDaoUpdateFailed({uuAppErrorMap}, e);
      }
      throw e;
    }

    activity.uuAppErrorMap = uuAppErrorMap;
    return activity;
  }

  async deleteStudent(awid, dtoIn) {
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      Errors.DeleteStudent.SubjectTermManInstanceDoesNotExist,
      Errors.DeleteStudent.SubjectTermManInstanceNotInProperState
    );

    let validationResult = this.validator.validate("activityDeleteStudentDtoInType", dtoIn);

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
      throw new Errors.DeleteStudent.ActivityDoesNotExist({uuAppErrorMap}, {activityId: dtoIn.id});
    }

    dtoIn.awid = awid;

    try {
      activity = await this.dao.deleteStudent(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {

        throw new Errors.DeleteStudent.ActivityDaoDeleteStudentFailed({uuAppErrorMap}, e);
      }
      throw e;
    }

    activity.uuAppErrorMap = uuAppErrorMap;
    return activity;
  }

  async addStudent(awid, dtoIn) {
    // HDS 1
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      // A1, A2
      Errors.AddStudent.SubjectTermManInstanceDoesNotExist,
      Errors.AddStudent.SubjectTermManInstanceNotInProperState
    );

    // HDS 2
    let validationResult = this.validator.validate("subjectTermAddStudentDtoInType", dtoIn);

    // A3, A4
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys.code,
      Errors.AddStudent.InvalidDtoIn);

    let activityFilter = {
      awid: awid,
      id: dtoIn.id,
    };

    // HDS 3
    let activity = await this.dao.get(activityFilter);

    // A5
    if (!activity) {
      throw new Errors.AddStudent.ActivityDoesNotExist({uuAppErrorMap}, {activityId: dtoIn.id});
    }

    let newStudent = {
      studentId: dtoIn.studentId,
      score: 0
    }

    // HDS 4
    try {
      activity = await this.dao.addStudent(activityFilter, newStudent);
    } catch (e) {
      // A6
      if (e instanceof ObjectStoreError) {

        throw new Errors.AddStudent.ActivityDaoAddStudentFailed({uuAppErrorMap}, e);
      }
      throw e;
    }

    activity.uuAppErrorMap = uuAppErrorMap;

    // HDS 5
    return activity;
  }

  async create(awid, dtoIn, session, authorizationResult) {
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      Errors.Create.SubjectTermManInstanceDoesNotExist,
      Errors.Create.SubjectTermManInstanceNotInProperState
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
    dtoIn.lifeCycleState = "planned";
    if (!dtoIn.activityLink) dtoIn.activityLink = "add link please";

    let activity;

    try {
      activity = await this.dao.create(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {

        throw new Errors.Create.ActivityDaoCreateFailed({uuAppErrorMap}, e);
      }
      throw e;
    }
    activity.uuAppErrorMap = uuAppErrorMap;
    activity.authResult = authorizationResult;

    return activity;
  }

  async delete(awid, dtoIn) {
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      Errors.Delete.SubjectTermManInstanceDoesNotExist,
      Errors.Delete.SubjectTermManInstanceNotInProperState
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
      throw new Errors.Delete.ActivityDoesNotExist({uuAppErrorMap}, {activityId: dtoIn.id});
    }

    await this.dao.delete(activity);

    return {uuAppErrorMap};
  }

  async list(awid, dtoIn) {
    // HDS 1
    await SubjecttermmanTeam11Abl.checkInstance(
      awid,
      // A1, A2
      Errors.Delete.SubjectTermManInstanceDoesNotExist,
      Errors.Delete.SubjectTermManInstanceNotInProperState
    );

    // HDS 2
    let validationResult = this.validator.validate("activityListDtoInType", dtoIn);

    // A3, A4
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.listUnsupportedKeys.code,
      Errors.List.InvalidDtoIn);

    // HDS 3
    dtoIn.sortBy = DEFAULTS.sortBy;
    if (!dtoIn.order) dtoIn.order = DEFAULTS.order;
    if (!dtoIn.pageInfo) dtoIn.pageInfo = {};
    if (!dtoIn.pageInfo.pageSize) dtoIn.pageInfo.pageSize = DEFAULTS.pageSize;
    if (!dtoIn.pageInfo.pageIndex) dtoIn.pageInfo.pageIndex = DEFAULTS.pageIndex;

    let filter = {
      awid: awid,
      subjectTermId: dtoIn.subjectTermId
    }

    let list = await this.dao.list(filter, dtoIn.sortBy, dtoIn.order, dtoIn.pageInfo);

    list.uuAppErrorMap = uuAppErrorMap;

    // HDS 4
    return list;
  }

}

module.exports = new ActivityAbl();
