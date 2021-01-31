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

  _handleDetail() {
    console.log("opoustim tile",this.props.onDetail,"a dal",this.props.data);
    const data = this.props.data;
    console.log("funkce?",this.props.onClose);
      data.onClose=this.props.onClose;

    this.props.onDetail(data);
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
          <UU5.Bricks.Button size="m" onClick={this._handleDetail}>

          </UU5.Bricks.Button>
        </UU5.Bricks.Div>
      </UU5.Bricks.Div>
    )
  }
  //@@viewOff:render
});

export default ActivityTile;
