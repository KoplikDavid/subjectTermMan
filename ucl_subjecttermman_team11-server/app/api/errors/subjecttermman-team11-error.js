"use strict";
const SubjecttermmanTeam11UseCaseError = require("./subjecttermman-team11-use-case-error.js");

const Init = {
  UC_CODE: `${SubjecttermmanTeam11UseCaseError.ERROR_PREFIX}init/`,

  SubjecttermmanInstanceAlreadyInitialized: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}subjecttermmanInstanceAlreadyInitialized`;
      this.message = "subjecttermmanInstance is already initialized.";
    }
  },

  InvalidDtoIn: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SchemaDaoCreateSchemaFailed: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.status = 500;
      this.code = `${Init.UC_CODE}schemaDaoCreateSchemaFailed`;
      this.message = "Create schema by Dao createSchema failed.";
    }
  },

  SysSetProfileFailed: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}sys/setProfileFailed`;
      this.message = "Set profile failed.";
    }
  },

  CreateAwscFailed: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}createAwscFailed`;
      this.message = "Create uuAwsc failed.";
    }
  },

  SubjecttermmanInstanceDaoCreateFailed: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}subjecttermmanInstanceDaoCreateFailed`;
      this.message = "Create subjecttermmanInstance by SubjecttermmanInstance DAO create failed.";
    }
  }
};

const Load = {
  UC_CODE: `${SubjecttermmanTeam11UseCaseError.ERROR_PREFIX}init/`,



  SubjecttermmanInstanceDoesNotExist: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Load.UC_CODE}subjecttermmanInstanceDoesNotExist`;
      this.message = "SubjecttermmanInstance does not exist.";
    }
  },
  SubjecttermmanInstanceNotInProperState: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Load.UC_CODE}subjecttermmanInstanceNotInProperState`;
      this.message = "SubjecttermmanInstance is not in proper state [active|underConstruction].";
    }
  },
  SubjecttermmanInstanceIsUnderConstruction: class extends SubjecttermmanTeam11UseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Load.UC_CODE}subjecttermmanInstanceIsUnderConstruction`;
      this.message = "SubjecttermmanInstance is in state underConstruction.";
    }
  }
};

module.exports = {
  Init,
  Load
};
