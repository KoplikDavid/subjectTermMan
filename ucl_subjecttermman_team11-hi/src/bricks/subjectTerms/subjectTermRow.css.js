import Config from "../config/config";

const rowContainer = () => Config.Css.css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 1em;
`;

export default {
  rowContainer,
};
