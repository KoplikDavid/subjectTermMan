//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent } from "uu5g04-hooks";

import Config from "./config/config.js";
import Lsi from "../activity/activity-tile-lsi";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "WelcomeRow",
  //@@viewOff:statics
};

const CLASS_NAMES = {
  main: () => Config.Css.css`
    padding: 24px 0;
    max-width: 624px;
    margin: 0 auto;
  `,
  text: () => Config.Css.css`
    text-align: center;

    ${UU5.Utils.ScreenSize.getMinMediaQueries("s", `text-align: left;`)}
  `,
  iconColumn: () => Config.Css.css`
    padding-right: 24px;
    text-align: center;

    ${UU5.Utils.ScreenSize.getMinMediaQueries("s", `text-align: right;`)}

    .uu5-bricks-icon {
      font-size: 48px;
    }
  `,
  icon: (cssMargin) => Config.Css.css`
    margin-top: ${cssMargin};
    margin-bottom: ${cssMargin};
  `,
};

export const TileColumn = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
    icon: UU5.PropTypes.string,
    textPadding: UU5.PropTypes.string,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    icon: undefined, // default of UU5.Bricks.Icon
    textPadding: null,
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    let { icon, textPadding, children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <UU5.Bricks.Column>
        <UU5.Bricks.Small>
          <UU5.Bricks.Strong style={{margin: 10}}><UU5.Bricks.Lsi lsi={Lsi.activityType}/></UU5.Bricks.Strong>
        </UU5.Bricks.Small>
        <UU5.Bricks.Small>
          <UU5.Bricks.Strong>{this.props.data.activityType}</UU5.Bricks.Strong>
        </UU5.Bricks.Small>
      </UU5.Bricks.Column>
    );
    //@@viewOff:render
  },
});

export default TileColumn;
