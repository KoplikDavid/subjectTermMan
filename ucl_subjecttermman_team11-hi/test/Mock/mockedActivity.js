const activity1 = {
  id: "601367c65e9c2e5459ed2b68", //generated unique code
  awid: "22222222222222222222222222222222", //app instance id - unique code specified externally
  "sys": {
    "cts": "2021-01-29T01:41:26.805Z",
    "mts": "2021-01-29T01:41:26.805Z",
    "rev": 0
  },
  activityType: "homework43",
  subjectTermId: "1",
  activityLink: "odkaz",
  defaultTerm: "31-1-2029",
  lifeCycleState: "planed",
  activityDetails: [
    {
      studentId: "1",
      score: 0
    },
    {
      studentId: "2",
      score: 10
    }
  ]
}

const activity2 = {
  id: "601367c65e9c2e5459ed2b67", //generated unique code
  awid: "22222222222222222222222222222222", //app instance id - unique code specified externally
  "sys": {
    "cts": "2021-01-29T01:41:26.805Z",
    "mts": "2021-01-29T01:41:26.805Z",
    "rev": 0
  },
  activityType: "test",
  subjectTermId: "1",
  activityLink: "odkaz",
  defaultTerm: "31-4-2029",
  lifeCycleState: "planed",
  activityDetails: [
    {
      studentId: "1",
      score: 0
    },
    {
      studentId: "2",
      score: 3
    }
  ]
}

const activityList = {
  itemList: [
    activity1,
    activity2
  ],
  pageInfo: {
    pageIndex: 0,
    pageSize: 20,
    total: 2
  },
  uuAppErrorMap: {}
}

module.exports = {
  activity1,
  activity2,
  activityList
}
