"use strict";
const { UseCaseError } = require("uu_appg01_server").AppServer;

class SubjecttermmanTeam11UseCaseError extends UseCaseError {
  static get ERROR_PREFIX() {
    return "ucl-subjecttermman-team11/";
  }

  constructor(dtoOut, paramMap = {}, cause = null) {
    if (paramMap instanceof Error) {
      cause = paramMap;
      paramMap = {};
    }
    super({ dtoOut, paramMap, status: 400 }, cause);
  }
}

module.exports = SubjecttermmanTeam11UseCaseError;
