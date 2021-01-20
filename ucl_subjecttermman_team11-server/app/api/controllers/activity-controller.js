"use strict";
const ActivityAbl = require("../../abl/activity-abl.js");

class ActivityController {

  list(ucEnv) {
    return ActivityAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  create(ucEnv) {
    return ActivityAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new ActivityController();
