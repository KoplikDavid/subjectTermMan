"use strict";

const SubjecttermmanTeam11UseCaseError = require("./subjecttermman-team11-use-case-error.js");
const ACTIVITY_ERROR_PREFIX = `${SubjecttermmanTeam11UseCaseError.ERROR_PREFIX}activity/`;

const Create = {
  UC_CODE: `${ACTIVITY_ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ActivityDaoCreateFailed: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}activityDaoCreateFailed`;
      this.message = "Create activity by activity DAO create failed.";
    }
  }
};

const List = {
  UC_CODE: `${ACTIVITY_ERROR_PREFIX}list/`,
  InvalidDtoIn: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  }
};

const Delete = {
  UC_CODE: `${ACTIVITY_ERROR_PREFIX}delete/`,

  InvalidDtoIn: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ActivityDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}activityInstanceDoesNotExist`;
      this.message = "Removing activity by activity Dao removeActivity failed.";
    }
  }
};

module.exports = {
  Delete,
  List,
  Create
};
