"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class ActivityMongo extends UuObjectDao {

  async createSchema(){
  }

}

module.exports = ActivityMongo;