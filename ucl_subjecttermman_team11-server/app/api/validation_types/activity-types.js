/* eslint-disable */
const activityCreateDtoInType = shape({
  activityType: uu5String(255).isRequired(),
  subjectTermId: integer.isRequired(),
})
