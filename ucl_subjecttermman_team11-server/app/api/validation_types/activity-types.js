/* eslint-disable */
const activityCreateDtoInType = shape({
  activityType: uu5String(255).isRequired(),
  subjectTermId: uu5String(255).isRequired(),
  activityLink: uu5String(255),
  defaultTerm: uu5String(255).isRequired(),
  activityDetails:array(shape({
    studentId: uu5String(255),
    score: integer()
  }))
});

const activityListDtoInType = shape({
  subjectTermId: uu5String(255).isRequired(),
  order: oneOf(["asc", "desc"]),
  pageInfo: shape({
    pageIndex: integer(),
    pageSize: integer()
  })
});

const activityDeleteDtoInType = shape({
  id: id().isRequired(),
});
