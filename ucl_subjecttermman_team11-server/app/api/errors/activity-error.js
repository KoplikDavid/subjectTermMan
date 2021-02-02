"use strict";

const SubjecttermmanTeam11UseCaseError = require("./subjecttermman-team11-use-case-error.js");
const ACTIVITY_ERROR_PREFIX = `${SubjecttermmanTeam11UseCaseError.ERROR_PREFIX}activity/`;

const Create = {
  UC_CODE: `${ACTIVITY_ERROR_PREFIX}create/`,

  UserNotAuthorized: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },

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
      this.code = `${Create.UC_CODE}SubjectTermInstanceDoesNotExist`;
      this.message = "SubjectTermInstance does not exist.";
    }
  },

  SubjectTermInstanceNotInProperState: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}SubjectTermInstanceNotInProperState`;
      this.message = "SubjectTermInstance is not in proper state [active|underConstruction].";
    }
  },
};

const List = {
  UC_CODE: `${ACTIVITY_ERROR_PREFIX}list/`,

  UserNotAuthorized: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },

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
      this.code = `${List.UC_CODE}SubjectTermInstanceDoesNotExist`;
      this.message = "SubjectTermInstance does not exist.";
    }
  },

  SubjectTermInstanceNotInProperState: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}SubjectTermInstanceNotInProperState`;
      this.message = "SubjectTermInstance is not in proper state [active|underConstruction].";
    }
  },
};

const Delete = {
  UC_CODE: `${ACTIVITY_ERROR_PREFIX}delete/`,

  UserNotAuthorized: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },

  InvalidDtoIn: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ActivityDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}activityInstanceDoesNotExist`;
      this.message = "Removing activity by activity Dao removeActivity failed.";
    }
  },

  SubjectTermInstanceDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}SubjectTermInstanceDoesNotExist`;
      this.message = "SubjectTermInstance does not exist.";
    }
  },

  SubjectTermInstanceNotInProperState: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}SubjectTermInstanceNotInProperState`;
      this.message = "SubjectTermInstance is not in proper state [active|underConstruction].";
    }
  },
};

const AddStudent = {
  UC_CODE: `${ACTIVITY_ERROR_PREFIX}addStudent/`,

  UserNotAuthorized: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddStudent.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },

  InvalidDtoIn: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddStudent.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ActivityDaoAddStudentFailed: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddStudent.UC_CODE}activityDaoAddStudentFailed`;
      this.message = "Add student by activity DAO update failed.";
    }
  },

  SubjectTermInstanceDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddStudent.UC_CODE}SubjectTermInstanceDoesNotExist`;
      this.message = "SubjectTermInstance does not exist.";
    }
  },

  SubjectTermInstanceNotInProperState: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddStudent.UC_CODE}SubjectTermInstanceNotInProperState`;
      this.message = "SubjectTermInstance is not in proper state [active|underConstruction].";
    }
  },

  ActivityDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddStudent.UC_CODE}ActivityTermDoesNotExist`;
      this.message = "Activity does not exist.";
    }
  },

};

const DeleteStudent = {
  UC_CODE: `${ACTIVITY_ERROR_PREFIX}deleteStudent/`,

  UserNotAuthorized: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteStudent.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },

  InvalidDtoIn: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteStudent.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ActivityDaoDeleteStudentFailed: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteStudent.UC_CODE}activityDaoDeleteStudentFailed`;
      this.message = "Delete student by activity DAO update failed.";
    }
  },

  SubjectTermInstanceDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteStudent.UC_CODE}SubjectTermInstanceDoesNotExist`;
      this.message = "SubjectTermInstance does not exist.";
    }
  },

  SubjectTermInstanceNotInProperState: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteStudent.UC_CODE}SubjectTermInstanceNotInProperState`;
      this.message = "SubjectTermInstance is not in proper state [active|underConstruction].";
    }
  },

  ActivityDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteStudent.UC_CODE}ActivityTermDoesNotExist`;
      this.message = "Activity does not exist.";
    }
  },
};



const Setstate = {
  UC_CODE: `${ACTIVITY_ERROR_PREFIX}setstate/`,

  UserNotAuthorized: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Setstate.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },

  SubjectTermInstanceDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Setstate.UC_CODE}SubjectTermInstanceDoesNotExist`;
      this.message = "SubjectTermInstance does not exist.";
    }
  },

  SubjectTermInstanceNotInProperState: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Setstate.UC_CODE}SubjectTermInstanceNotInProperState`;
      this.message = "SubjectTermInstance is not in proper state [active|underConstruction].";
    }
  },

  InvalidDtoIn: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Setstate.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ActivityDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Setstate.UC_CODE}ActivityDoesNotExist`;
      this.message = "Activity does not exist.";
    }
  },

  ActivityDaoUpdateFailed: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Setstate.UC_CODE}ActivitySetStateDaoUpdateFailed`;
      this.message = "Update activity state by Activity Dao update failed.";
    }
  }

};

const SetActivityLink = {
  UC_CODE: `${ACTIVITY_ERROR_PREFIX}setActyvityLink/`,

  UserNotAuthorized: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${SetActivityLink.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },

  SubjectTermInstanceDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${SetActivityLink.UC_CODE}SubjectTermInstanceDoesNotExist`;
      this.message = "SubjectTermInstance does not exist.";
    }
  },
  SubjectTermInstanceNotInProperState: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${SetActivityLink.UC_CODE}SubjectTermInstanceNotInProperState`;
      this.message = "SubjectTermInstance is not in proper state [active|underConstruction].";
    }
  },
  InvalidDtoIn: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${SetActivityLink.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ActivityDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${SetActivityLink.UC_CODE}ActivityDoesNotExist`;
      this.message = "Activity does not exist.";
    }
  },

  ActivityLinkDaoUpdateFailed: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${SetActivityLink.UC_CODE}SubjectTermDaoUpdateFailed`;
      this.message = "Update activity Link by Activity Dao update failed.";
    }
  }

};

module.exports = {
  SetActivityLink,
  Setstate,
  DeleteStudent,
  AddStudent,
  Delete,
  List,
  Create
};
