/* eslint-disable */
const activityCreateDtoInType = shape({
  activityType: uu5String(255).isRequired(),
  subjectTermId: integer().isRequired(),
});

const activityListDtoInType = shape({
  order: oneOf(["asc", "desc"]),
  pageInfo: shape({
    pageIndex: integer(),
    pageSize: integer()
  })
});
