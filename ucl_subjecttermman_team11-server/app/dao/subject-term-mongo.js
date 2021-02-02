"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class SubjectTermMongo extends UuObjectDao {

  async createSchema(){
    await super.createIndex({ awid: 1, _id: 1 }, { unique: true });
  }

  async create(uuObject) {
    return await super.insertOne(uuObject);
  }

  async list(awid, sortBy, order, pageInfo) {
    let filter = { awid: awid};
    let sort = {
      [sortBy]: order === "asc" ? 1 : -1
    };
    return await super.find(filter, pageInfo, sort);
  }

  async delete(uuObject) {
    let filter = {
      awid: uuObject.awid,
      _id: uuObject.id,
    };
    return await super.deleteOne(filter);
  }

  async get(uuObject) {
    let filter = {
      awid: uuObject.awid,
      _id: uuObject.id,
    };
    return await super.findOne(filter);
  }

  async setState(filter, dtoIn) {
    return await super.findOneAndUpdate(filter, dtoIn, "NONE");
  }

  async addStudent(filter, newStudent) {

    let update = {
      $push: {students: {studentId: newStudent}}
    }
    return await super.findOneAndUpdate(filter, update, "NONE");
  }

  async deleteStudent(dToIn) {
    let filter= {
      awid:dToIn.awid,
      id: dToIn.id,
    }
    let update = {
      $pull: {students: {studentId: dToIn.studentId}}
    }
    return await super.findOneAndUpdate(filter, update, "NONE");
  }

}

module.exports = SubjectTermMongo;
