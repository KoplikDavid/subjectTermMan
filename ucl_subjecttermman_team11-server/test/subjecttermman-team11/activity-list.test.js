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

describe("activity/list uuCMD tests", () => {
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
      activityDetails: [],
    };

    await TestHelper.executePostCommand("activity/create", newActivity);
    const result = await TestHelper.executeGetCommand("activity/list", {
      subjectTermId: termId,
      order: "asc",
      pageInfo: {
        pageIndex: "0",
        pageSize: "20",
      },
    });

    expect(result.status).toEqual(200);
    expect(result.data.uuAppErrorMap).toEqual({});
    expect(result.data.itemList[0].activityType).toEqual(newActivity.activityType);
    expect(result.data.itemList[0].subjectTermId).toEqual(termId);
    expect(result.data.itemList[0].defaultTerm).toEqual(newActivity.defaultTerm);
    expect(result.data.itemList[0].activityDetails).toBeDefined();
    expect(result.data.itemList[0].awid).toEqual(TestHelper.awid);
  });

  test("invalid dtoIn", async () => {
    expect.assertions(3);
    try {
      await TestHelper.executeGetCommand("activity/list", {});
    } catch (e) {
      expect(e.code).toEqual("ucl-subjecttermman-team11/activity/list/invalidDtoIn");
      expect(Object.keys(e.paramMap.missingKeyMap).length).toEqual(1);
      expect(e.status).toEqual(400);
    }
  });
});
