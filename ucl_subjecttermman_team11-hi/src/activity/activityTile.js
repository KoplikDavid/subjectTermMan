import UU5 from "uu5g04";
import Plus4U5 from "uu_plus4u5g01";

const ActivityTile = UU5.Common.VisualComponent.create({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: "UU5.ActivityTile",
    classNames: {
      main: "uu5-tiles-ActivityTile"
    }
  },
  //@@viewOff:statics

  //@@viewOn:render
  render() {
    console.log(this.props);
    let mainProps = this.getMainPropsToPass();
    mainProps.style = { ...mainProps.style, ...{ height: "100%", width: "100%" } };

    return (
      <UU5.Bricks.Div {...mainProps}>
        <UU5.Bricks.Div
          style={{
            position: "relative",
            width: "100%",
            height: "40%",
            overflow: "hidden",
            padding: 8,
            display: "flex",
            flexDirection: "column"
          }}
        >
          <UU5.Bricks.Small>
            <UU5.Bricks.Strong><UU5.Bricks.Lsi lsi={this.props.data.activityType} /></UU5.Bricks.Strong>,{" "}

          </UU5.Bricks.Small>
        </UU5.Bricks.Div>
      </UU5.Bricks.Div>
    )
  }
  //@@viewOff:render
});

export default ActivityTile;
