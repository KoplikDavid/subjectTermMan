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

describe("subjectTerm/addStudent uuCMD tests", () => {
  test("HDS", async () => {
    const newSubjectTerm = {
      subjectCode: "PEST",
      subjectName: "home",
      termCode: "PES2018SP",
      students: [],
    };

    const subjectTerm = await TestHelper.executePostCommand("subjectTerm/create", newSubjectTerm);
    const termId = subjectTerm.data.id;

    const newStudent = {
      id: termId,
      studentId: "4-1",
    };

    const result = await TestHelper.executePostCommand("subjectTerm/addStudent", newStudent);

    expect(result.status).toEqual(200);
    expect(result.data.uuAppErrorMap).toEqual({});
    expect(result.data.awid).toEqual(TestHelper.awid);
    expect(result.data.students[0].studentId).toEqual(newStudent.studentId);
  });

  test("invalid dtoIn", async () => {
    const newSubjectTerm = {
      subjectCode: "PEST",
      subjectName: "home",
      termCode: "PES2018SP",
      students: [],
    };

    await TestHelper.executePostCommand("subjectTerm/create", newSubjectTerm);
    expect.assertions(3);
    try {
      await TestHelper.executePostCommand("subjectTerm/addStudent", {});
    } catch (e) {
      expect(e.code).toEqual("ucl-subjecttermman-team11/subjectTerm/addStudent/invalidDtoIn");
      expect(Object.keys(e.paramMap.missingKeyMap).length).toEqual(2);
      expect(e.status).toEqual(400);
    }
  });
});
