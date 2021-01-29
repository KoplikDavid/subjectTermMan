/* eslint-disable */

const initDtoInType = shape({
  uuAppProfileAuthorities: uri().isRequired("uuBtLocationUri"),
  uuBtLocationUri: uri().isRequired("uuAppProfileAuthorities"),
  permissionMatrix: array(oneOf([string(/^[0+1]{32}$/), string(/^[0+1]{8}\-[0+1]{8}\-[0+1]{8}\-[0+1]{8}$/), integer()]),1,32),
  state: oneOf(["active", "underConstruction", "closed"]),
  name: uu5String(4000),
  logo: binary()
});
