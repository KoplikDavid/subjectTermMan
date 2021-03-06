"use strict";
const {UuObjectDao} = require("uu_appg01_server").ObjectStore;

class ActivityMongo extends UuObjectDao {

  async createSchema() {
    await super.createIndex({awid: 1, _id: 1 }, {unique: true});
  }

  async create(uuObject) {
    return await super.insertOne(uuObject);
  }

  async list(filter, sortBy, order, pageInfo) {

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

  async addStudent(filter, newStudent) {

    let update = {
      $push: {activityDetails: newStudent}
    }
    return await super.findOneAndUpdate(filter, update, "NONE");
  }

  async deleteStudent(dToIn) {
    let filter= {
      awid:dToIn.awid,
      id: dToIn.id,
    }
    let update = {
      $pull: {activityDetails:{studentId: dToIn.studentId}}
    }
    return await super.findOneAndUpdate(filter, update, "NONE");
  }

  async update(filter,dToIn){
    return await super.findOneAndUpdate(filter, dToIn, "NONE");
  }

  async assess(filter,dToIn){
let studentFilter={
  awid:filter.awid,
  id: filter.id,
  "activityDetails.studentId": dToIn.studentId
}

    let update={
      $set: {"activityDetails.$.score": dToIn.score}
    }
    return await super.findOneAndUpdate(studentFilter, update, "NONE");
  }

}

module.exports = ActivityMongo;
