"use strict";
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory, ObjectStoreError } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const { Profile, AppClientTokenService, UuAppWorkspace, UuAppWorkspaceError } = require("uu_appg01_server").Workspace;
const { UriBuilder } = require("uu_appg01_server").Uri;
const { LoggerFactory } = require("uu_appg01_server").Logging;
const { AppClient } = require("uu_appg01_server");
const Errors = require("../api/errors/subjecttermman-team11-error.js");

const WARNINGS = {
  initUnsupportedKeys: {
    code: `${Errors.Init.UC_CODE}unsupportedKeys`,
  },
};

const AUTHORITIES = "Authorities";
const EXECUTIVES = "Executives";
const STATE_ACTIVE = "active";
const STATE_UNDER_CONSTRUCTION = "underConstruction";
const STATE_CLOSED = "closed";

const logger = LoggerFactory.get("SubjecttermmanTeam11Abl");

class SubjecttermmanTeam11Abl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("subjecttermmanTeam11");
  }

  async init(uri, dtoIn, session) {
    const awid = uri.getAwid();
    // HDS 1
    let jokeInstance = await this.dao.getByAwid(awid);
    // A1
    if (jokeInstance) {
      throw new Errors.Init.SubjecttermmanInstanceAlreadyInitialized();
    }

    // HDS 2
    let validationResult = this.validator.validate("initDtoInType", dtoIn);
    // A2, A3
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.initUnsupportedKeys.code,
      Errors.Init.InvalidDtoIn
    );

    // HDS 3
    const schemas = ["subjecttermmanTeam11", "activity","subjectTerm"];
    let schemaCreateResults = schemas.map(async (schema) => {
      try {
        return await DaoFactory.getDao(schema).createSchema();
      } catch (e) {
        // A3
        throw new Errors.Init.SchemaDaoCreateSchemaFailed({ uuAppErrorMap }, { schema }, e);
      }
    });
    await Promise.all(schemaCreateResults);

    // HDS 7
    if (dtoIn.uuBtLocationUri) {
      const baseUri = uri.getBaseUri();
      const uuBtUriBuilder = UriBuilder.parse(dtoIn.uuBtLocationUri);
      const location = uuBtUriBuilder.getParameters().id;
      const uuBtBaseUri = uuBtUriBuilder.toUri().getBaseUri();

      const createAwscDtoIn = {
        name: "UclSubjecttermman",
        typeCode: "ucl-subjecttermman-team11",
        location: location,
        uuAppWorkspaceUri: baseUri,
      };

      const awscCreateUri = uuBtUriBuilder.setUseCase("uuAwsc/create").toUri();

      // HDS 6
      const appClientToken = await AppClientTokenService.createToken(uri, uuBtBaseUri);
      const callOpts = AppClientTokenService.setToken({ session }, appClientToken);

      let awscId;
      try {
        const awscDtoOut = await AppClient.post(awscCreateUri, createAwscDtoIn, callOpts);
        awscId = awscDtoOut.id;
      } catch (e) {
        if (e.code.includes("applicationIsAlreadyConnected") && e.paramMap.id) {
          logger.warn(`Awsc already exists id=${e.paramMap.id}.`, e);
          awscId = e.paramMap.id;
        } else {
          throw new Errors.Init.CreateAwscFailed({ uuAppErrorMap }, { location: dtoIn.uuBtLocationUri }, e);
        }
      }

      const artifactUri = uuBtUriBuilder.setUseCase(null).clearParameters().setParameter("id", awscId).toUri();

      // HDS 8
      await UuAppWorkspace.connectArtifact(
        baseUri,
        {
          artifactUri: artifactUri.toString(),
          synchronizeArtifactBasicAttributes: false,
        },
        session
      );
    }

    // HDS 5
    if (dtoIn.uuAppProfileAuthorities) {
      try {
        await Profile.set(awid, "Authorities", dtoIn.uuAppProfileAuthorities);
      } catch (e) {
        // A4
        if (e instanceof UuAppWorkspaceError) {
          throw new Errors.Init.SysSetProfileFailed({ uuAppErrorMap }, { role: dtoIn.uuAppProfileAuthorities }, e);
        }
        throw e;
      }
    }

    dtoIn.awid = awid;

    // HDS 11
    try {
      let instance = await this.dao.create(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Init.SubjecttermmanInstanceDaoCreateFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }
    const workspace = UuAppWorkspace.get(awid);

    // HDS 12
    return {
      ...workspace,
      uuAppErrorMap: uuAppErrorMap,
    };
  }

  async load(uri, authorizationResult) {
    const awid = uri.getAwid();

    let subjecttermman = await this.checkInstance(
      awid,
      Errors.Load.SubjecttermmanInstanceDoesNotExist,
      Errors.Load.SubjecttermmanInstanceNotInProperState
    );

    let authorizedProfiles = authorizationResult.getAuthorizedProfiles();
    if (
      subjecttermman.state === STATE_UNDER_CONSTRUCTION &&
      !authorizedProfiles.includes(AUTHORITIES) &&
      !authorizedProfiles.includes(EXECUTIVES)
    ) {
      throw new Errors.Load.SubjecttermmanInstanceIsUnderConstruction({}, { state: subjecttermman.state });
    }


    // hds 3
    subjecttermman.authorizedProfileList = authorizedProfiles;

    // HDS 4
    return subjecttermman;
  }


  async checkInstance(awid, notExistError, closedStateError) {
    let subjecttermman = await this.dao.getByAwid(awid);
    if (!subjecttermman) {
      throw new notExistError();
    }
    if (subjecttermman.state === STATE_CLOSED) {
      throw new closedStateError(
        {},
        {
          state: subjecttermman.state,
          expectedStateList: [STATE_ACTIVE, STATE_UNDER_CONSTRUCTION]
        }
      );
    }
    return subjecttermman;
  }
}

module.exports = new SubjecttermmanTeam11Abl();
