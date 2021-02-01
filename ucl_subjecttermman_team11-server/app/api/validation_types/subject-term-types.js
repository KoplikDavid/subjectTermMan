/* eslint-disable */
const subjectTermDtoInType = shape({
  subjectCode: uu5String(255).isRequired(),
  subjectName: uu5String(255).isRequired(),
  termCode: uu5String(255).isRequired(),
  students: array(id(), 50)
});

const subjectTermSetStateDtoInType = shape({
  id: id().isRequired(),
  lifeCycleState: oneOf(["Planned", "Cancelled","Took place"])
});

const subjectTermDeleteDtoInType = shape({
  id: id().isRequired(),
});

const subjectTermListDtoInType = shape({
  order: oneOf(["asc", "desc"]),
  pageInfo: shape({
    pageIndex: integer(),
    pageSize: integer()
  })
});

const subjectTermAddStudentDtoInType =shape({
  id: id().isRequired(),
  studentId: uu5String(255).isRequired()
});

const subjectTermDeleteStudentDtoInType =shape({
  id: id().isRequired(),
  studentId: uu5String(255).isRequired()
});
