"use strict";
const ActivityAbl = require("../../abl/activity-abl.js");

class ActivityController {

  deleteStudent(ucEnv) {
    return ActivityAbl.deleteStudent(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  addStudent(ucEnv) {
    return ActivityAbl.addStudent(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  delete(ucEnv) {
    return ActivityAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  list(ucEnv) {
    return ActivityAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getAuthorizationResult());
  }

  create(ucEnv) {
    return ActivityAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession(), ucEnv.getAuthorizationResult());
  }

}

module.exports = new ActivityController();
