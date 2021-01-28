"use strict";
const SubjecttermmanTeam11Abl = require("../../abl/subjecttermman-team11-abl.js");

class SubjecttermmanTeam11Controller {
  init(ucEnv) {
    return SubjecttermmanTeam11Abl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
  load(ucEnv) {
    return SubjecttermmanTeam11Abl.load(ucEnv.getUri(), ucEnv.getAuthorizationResult());
  }
}

module.exports = new SubjecttermmanTeam11Controller();
