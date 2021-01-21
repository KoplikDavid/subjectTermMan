"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory, ObjectStoreError } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/activity-error.js");

const WARNINGS = {
  createUnsupportedKeys: {
    code: `${Errors.Create.UC_CODE}unsupportedKeys`
  },
  listUnsupportedKeys: {
    code: `${Errors.List.UC_CODE}unsupportedKeys`
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

  async create(awid, dtoIn, session, authorizationResult) {
    let validationResult = this.validator.validate("activityCreateDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn);

    dtoIn.uuIdentity = session.getIdentity().getUuIdentity();
    dtoIn.uuIdentityName = session.getIdentity().getName();
    dtoIn.awid = awid;

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

  async list(awid, dtoIn, authorizationResult) {
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

    let list = await this.dao.list(awid, dtoIn.sortBy, dtoIn.order, dtoIn.pageInfo);

    list.uuAppErrorMap = uuAppErrorMap;
    return list;
  }

}

module.exports = new ActivityAbl();
