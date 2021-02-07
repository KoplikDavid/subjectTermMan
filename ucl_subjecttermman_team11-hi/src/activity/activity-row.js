import UU5 from "uu5g04";
import Lsi from "./activity-tile-lsi";

const ActivityRow = UU5.Common.VisualComponent.create({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: "UU5.ActivityRow",
    classNames: {
      main: "uu5-tiles-ActivityRow"
    }
  },
  //@@viewOff:statics

  //@@viewOn:private

  //@@viewOff:private

  //@@viewOn:render
  render() {
    let mainProps = this.getMainPropsToPass();
    mainProps.style = {...mainProps.style};

    return (
      <UU5.Bricks.Div {...mainProps}>
          <UU5.Bricks.Column>
            <UU5.Bricks.Small>
              <UU5.Bricks.Strong style={{margin: 10}}><UU5.Bricks.Lsi lsi={Lsi.activityType}/></UU5.Bricks.Strong>
            </UU5.Bricks.Small>
            <UU5.Bricks.Small>
              <UU5.Bricks.Strong>{this.props.data.activityType}</UU5.Bricks.Strong>
            </UU5.Bricks.Small>
          </UU5.Bricks.Column>
      </UU5.Bricks.Div>
    )
  }
  //@@viewOff:render
});

export default ActivityRow;
