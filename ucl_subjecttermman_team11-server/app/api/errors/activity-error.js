"use strict";

const SubjecttermmanTeam11UseCaseError = require("./subjecttermman-team11-use-case-error.js");
const ACTIVITY_ERROR_PREFIX = `${SubjecttermmanTeam11UseCaseError.ERROR_PREFIX}activity/`;

const Create = {
  UC_CODE: `${ACTIVITY_ERROR_PREFIX}create/`,
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

};

module.exports = {
  List,
  Create
};
