//TODO adjust the grid

import Config from "../config/config";

const rowContainer = () => Config.Css.css`
    display: grid;
    grid-template-columns: repeat(3, 100px);
    margin-bottom: 1em;
`;

const firstName = () => Config.Css.css`
    margin-right: 1em;
`;

export default {
  rowContainer,
  firstName,
};
