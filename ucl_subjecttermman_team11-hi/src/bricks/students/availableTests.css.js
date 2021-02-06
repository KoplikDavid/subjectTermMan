import Config from "../config/config";

const testContainer = () => Config.Css.css`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const testRow = () => Config.Css.css`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export default {
  testContainer,
  testRow,
};
