import UU5 from "uu5g04";
import Lsi from "./activity-tile-lsi";

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

  //@@viewOn:private
  _handleDelete() {

  },
  //@@viewOff:private

  //@@viewOn:render
  renderHeader() {
    return (
      <>
        My funny joke
      </>
    );
  },

  render() {
    console.log("color", Object.keys(UU5.Environment.colorSchemaMap));
    console.log(this.props);
    let mainProps = this.getMainPropsToPass();
    mainProps.style = {...mainProps.style, ...{height: "100%", width: "100%"}};

    return (
      <UU5.Bricks.Div {...mainProps}>
        <UU5.Bricks.Div
          style={{
            position: "relative",
            width: "100%",
            height: "70%",
            overflow: "hidden",
            padding: 8,
            display: "flex",
            flexDirection: "column",
            margin: 10
          }}
        >
          <UU5.Bricks.Heading><UU5.Bricks.Lsi lsi={Lsi.header}/></UU5.Bricks.Heading>
          <UU5.Bricks.Column>
            <UU5.Bricks.Small>
              <UU5.Bricks.Strong style={{margin: 10}}><UU5.Bricks.Lsi lsi={Lsi.activityType}/></UU5.Bricks.Strong>
            </UU5.Bricks.Small>
            <UU5.Bricks.Small>
              <UU5.Bricks.Strong>{this.props.data.activityType}</UU5.Bricks.Strong>
            </UU5.Bricks.Small>
          </UU5.Bricks.Column>
          <UU5.Bricks.Column>
            <UU5.Bricks.Small>
              <UU5.Bricks.Strong style={{margin: 10}}><UU5.Bricks.Lsi lsi={Lsi.activityType}/></UU5.Bricks.Strong>
            </UU5.Bricks.Small>
            <UU5.Bricks.Small>
              <UU5.Bricks.Strong>{this.props.data.activityType}</UU5.Bricks.Strong>
            </UU5.Bricks.Small>
          </UU5.Bricks.Column>
        </UU5.Bricks.Div>
        <UU5.Bricks.Div
          style={{
            position: "relative",
            width: "100%",
            height: "30%",
            overflow: "hidden",
            padding: 8,
            display: "flex",
            flexDirection: "column"
          }}
        >
          <UU5.Bricks.Panel
            header="Manage student"
            content="Ut nec nunc dui. Praesent eget urna rhoncus, facilisis sem at, vestibulum nibh. Aliquam cursus purus sapien, ac facilisis est malesuada at. Fusce accumsan, mi ut volutpat posuere, neque elit tincidunt arcu, vel venenatis odio elit sed mi. Sed porttitor, orci quis dignissim elementum, velit nunc tristique tellus, at ullamcorper orci ex eget lacus."
            colorSchema={this.state.colorSchema === "null" ? null : this.state.colorSchema}
            colorSchemaHeader={"primary"}
            colorSchemaContent={"primary"}
            bgStyle={"underline"}
            bgStyleHeader={this.state.bgStyleHeader === "null" ? null : this.state.bgStyleHeader}
            bgStyleContent={this.state.bgStyleContent === "null" ? null : this.state.bgStyleContent}
            iconExpanded="mdi-chevron-up" iconCollapsed="mdi-chevron-down"
            openClick={this.state.openClick === "null" ? null : this.state.openClick}
          />
        </UU5.Bricks.Div>
      </UU5.Bricks.Div>
    )
  }
  //@@viewOff:render
});

export default ActivityTile;
