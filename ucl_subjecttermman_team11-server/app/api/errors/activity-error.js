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
  },

  SubjectTermInstanceDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}SubjectTermInstanceDoesNotExist`;
      this.message = "SubjectTermInstance does not exist.";
    }
  },

  SubjectTermInstanceNotInProperState: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}SubjectTermInstanceNotInProperState`;
      this.message = "SubjectTermInstance is not in proper state [active|underConstruction].";
    }
  },
};

const List = {
  UC_CODE: `${ACTIVITY_ERROR_PREFIX}list/`,
  InvalidDtoIn: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SubjectTermInstanceDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}SubjectTermInstanceDoesNotExist`;
      this.message = "SubjectTermInstance does not exist.";
    }
  },

  SubjectTermInstanceNotInProperState: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}SubjectTermInstanceNotInProperState`;
      this.message = "SubjectTermInstance is not in proper state [active|underConstruction].";
    }
  },
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
  },

  SubjectTermInstanceDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}SubjectTermInstanceDoesNotExist`;
      this.message = "SubjectTermInstance does not exist.";
    }
  },

  SubjectTermInstanceNotInProperState: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}SubjectTermInstanceNotInProperState`;
      this.message = "SubjectTermInstance is not in proper state [active|underConstruction].";
    }
  },
};

const AddStudent = {
  UC_CODE: `${ACTIVITY_ERROR_PREFIX}addStudent/`,

  InvalidDtoIn: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ActivityDaoAddStudentFailed: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}activityDaoAddStudentFailed`;
      this.message = "Add student by activity DAO update failed.";
    }
  },

  SubjectTermInstanceDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}SubjectTermInstanceDoesNotExist`;
      this.message = "SubjectTermInstance does not exist.";
    }
  },

  SubjectTermInstanceNotInProperState: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}SubjectTermInstanceNotInProperState`;
      this.message = "SubjectTermInstance is not in proper state [active|underConstruction].";
    }
  },

  ActivityDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}ActivityTermDoesNotExist`;
      this.message = "Activity does not exist.";
    }
  },

};

module.exports = {
  AddStudent,
  Delete,
  List,
  Create
};
