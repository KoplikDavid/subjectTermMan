const { TestHelper } = require("uu_appg01_server-test");

beforeAll(async () => {
  await TestHelper.setup();
  await TestHelper.initUuSubAppInstance();
  await TestHelper.createUuAppWorkspace();
  await TestHelper.initUuAppWorkspace({
    uuAppProfileAuthorities: "urn:uu:GGALL",
  });
});

afterAll(() => {
  TestHelper.teardown();
});

describe("activity/assessStudent uuCMD tests", () => {
  test("HDS", async () => {
    const newSubjectTerm = {
      subjectCode: "PEST",
      subjectName: "home",
      termCode: "PES2018SP",
      students: [],
    };

    const subjectTerm = await TestHelper.executePostCommand("subjectTerm/create", newSubjectTerm);
    const termId = subjectTerm.data.id;

    const newActivity = {
      activityType: "Homework1",
      subjectTermId: termId,
      activityLink: "",
      defaultTerm: "23-5-2019",
      activityDetails: [
        {
          studentId: "2-3",
          score: 0,
        },
      ],
    };

    const activity = await TestHelper.executePostCommand("activity/create", newActivity);
    const activityId = activity.data.id;

    const result = await TestHelper.executePostCommand("activity/assessStudent", {
      id: activityId,
      studentId: "2-3",
      score: 100,
    });

    expect(result.status).toEqual(200);
    expect(result.data.uuAppErrorMap).toEqual({});
    expect(result.data.awid).toEqual(TestHelper.awid);
    expect(result.data.activityDetails[0].studentId).toEqual("2-3");
    expect(result.data.activityDetails[0].score).toEqual(100);
  });

  test("invalid dtoIn", async () => {
    expect.assertions(3);
    try {
      await TestHelper.executePostCommand("activity/assessStudent", {});
    } catch (e) {
      expect(e.code).toEqual("ucl-subjecttermman-team11/activity/assessStudent/invalidDtoIn");
      expect(Object.keys(e.paramMap.missingKeyMap).length).toEqual(2);
      expect(e.status).toEqual(400);
    }
  });
});
