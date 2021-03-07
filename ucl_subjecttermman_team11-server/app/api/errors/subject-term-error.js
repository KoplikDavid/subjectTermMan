"use strict";

const SubjecttermmanTeam11UseCaseError = require("./subjecttermman-team11-use-case-error.js");
const SUBJECT_TERM_ERROR_PREFIX = `${SubjecttermmanTeam11UseCaseError.ERROR_PREFIX}subjectTerm/`;

const Create = {
  UC_CODE: `${SUBJECT_TERM_ERROR_PREFIX}create/`,

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

  SubjectTermDaoCreateFailed: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}SubjectTermDaoCreateFailed`;
      this.message = "Create SubjectTerm by SubjectTerm DAO create failed.";
    }
  },

  SubjectTermManInstanceDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}SubjectTermManInstanceDoesNotExist`;
      this.message = "SubjectTermInstance does not exist.";
    }
  },

  SubjectTermManInstanceNotInProperState: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}SubjectTermManInstanceNotInProperState`;
      this.message = "SubjectTermInstance is not in proper state [active|underConstruction].";
    }
  },
};

const Delete = {
  UC_CODE: `${SUBJECT_TERM_ERROR_PREFIX}delete/`,

  UserNotAuthorized: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },

  SubjectTermManInstanceDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}SubjectTermManInstanceDoesNotExist`;
      this.message = "SubjectTermInstance does not exist.";
    }
  },

  SubjectTermManInstanceNotInProperState: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}SubjectTermManInstanceNotInProperState`;
      this.message = "SubjectTermInstance is not in proper state [active|underConstruction].";
    }
  },

  InvalidDtoIn: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SubjectTermDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}SubjectTermManInstanceDoesNotExist`;
      this.message = "Removing SubjectTerm by SubjectTerm Dao removeActivity failed.";
    }
  }

};

const List = {
  UC_CODE: `${SUBJECT_TERM_ERROR_PREFIX}list/`,

  UserNotAuthorized: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },

  SubjectTermManInstanceDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}SubjectTermManInstanceDoesNotExist`;
      this.message = "SubjectTermInstance does not exist.";
    }
  },

  SubjectTermManInstanceNotInProperState: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}SubjectTermManInstanceNotInProperState`;
      this.message = "SubjectTermInstance is not in proper state [active|underConstruction].";
    }
  },

  InvalidDtoIn: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

};

const AddStudent = {
  UC_CODE: `${SUBJECT_TERM_ERROR_PREFIX}addStudent/`,

  UserNotAuthorized: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddStudent.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },

  SubjectTermManInstanceDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddStudent.UC_CODE}SubjectTermManInstanceDoesNotExist`;
      this.message = "SubjectTermInstance does not exist.";
    }
  },

  SubjectTermManInstanceNotInProperState: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddStudent.UC_CODE}SubjectTermManInstanceNotInProperState`;
      this.message = "SubjectTermInstance is not in proper state [active|underConstruction].";
    }
  },

  InvalidDtoIn: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddStudent.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SubjectTermDaoAddStudentFailed: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddStudent.UC_CODE}subjectTermDaoAddStudentFailed`;
      this.message = "Add student by subjectTerm DAO update failed.";
    }
  },

  SubjectTermDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddStudent.UC_CODE}SubjectTermDoesNotExist`;
      this.message = "SubjectTerm does not exist.";
    }
  },
};

const DeleteStudent = {
  UC_CODE: `${SUBJECT_TERM_ERROR_PREFIX}deleteStudent/`,

  UserNotAuthorized: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteStudent.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },

  SubjectTermManInstanceDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteStudent.UC_CODE}SubjectTermManInstanceDoesNotExist`;
      this.message = "SubjectTermInstance does not exist.";
    }
  },

  SubjectTermManInstanceNotInProperState: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteStudent.UC_CODE}SubjectTermManInstanceNotInProperState`;
      this.message = "SubjectTermInstance is not in proper state [active|underConstruction].";
    }
  },

  InvalidDtoIn: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteStudent.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SubjectTermDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteStudent.UC_CODE}SubjectTermDoesNotExist`;
      this.message = "SubjectTerm does not exist.";
    }
  },

  SubjectTermDaoDeleteStudentFailed: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteStudent.UC_CODE}subjectTermDaoDeleteStudentFailed`;
      this.message = "Delete student by subjectTerm DAO update failed.";
    }
  },

};

const SetState = {
  UC_CODE: `${SUBJECT_TERM_ERROR_PREFIX}setState/`,

  UserNotAuthorized: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${SetState.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },

  SubjectTermManInstanceDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${SetState.UC_CODE}SubjectTermManInstanceDoesNotExist`;
      this.message = "SubjectTermInstance does not exist.";
    }
  },
  SubjectTermManInstanceNotInProperState: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${SetState.UC_CODE}SubjectTermManInstanceNotInProperState`;
      this.message = "SubjectTermInstance is not in proper state [active|underConstruction].";
    }
  },
  InvalidDtoIn: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${SetState.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SubjectTermDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${SetState.UC_CODE}SubjectTermDoesNotExist`;
      this.message = "SubjectTerm does not exist.";
    }
  },

  SubjectTermDaoUpdateFailed: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${SetState.UC_CODE}SubjectTermDaoUpdateFailed`;
      this.message = "Update SubjectTerm by SubjectTerm Dao update failed.";
    }
  }

};

module.exports = {
  SetState,
  DeleteStudent,
  AddStudent,
  List,
  Delete,
  Create
};
