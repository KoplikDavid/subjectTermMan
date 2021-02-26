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
    const data = this.props.data;

    data.onClose=this.props.onClose;
    this.props.onDetail(data);
  },



  //@@viewOff:private

  //@@viewOn:render

  render() {
    let mainProps = this.getMainPropsToPass();
    mainProps.style = {...mainProps.style, ...{height: "100%", width: "100%"}};

    return (
      <UU5.Bricks.Div {...mainProps}>
        <UU5.Bricks.Div
          style={{
            position: "relative",
            width: "100%",
            height: "50%",
            overflow: "hidden",
            padding: 8,
            display: "flex",
            flexDirection: "column",
            margin: 10
          }}
        >
          <UU5.Bricks.Heading><UU5.Bricks.Lsi lsi={Lsi.header}/></UU5.Bricks.Heading>
          {Object.entries(this.props.data).map(([key, value]) => {
            if (["activityType","defaultTerm"].includes(key)) {
              return (
                <UU5.Bricks.Column>
                  <UU5.Bricks.Small>
                    <UU5.Bricks.Strong style={{margin: 10}}><UU5.Bricks.Lsi lsi={Lsi[key]}/></UU5.Bricks.Strong>
                  </UU5.Bricks.Small>
                  <UU5.Bricks.Small>
                    <UU5.Bricks.Strong>{value}</UU5.Bricks.Strong>
                  </UU5.Bricks.Small>
                </UU5.Bricks.Column>
              )
            }
          })
          }
        </UU5.Bricks.Div>
        <UU5.Bricks.Div
          style={{
            position: "relative",
            width: "100%",
            height: "50%",
            overflow: "hidden",
            padding: 8,
            display: "flex",
            flexDirection: "column"
          }}
        >
          <UU5.Bricks.Button content={<UU5.Bricks.Lsi lsi={Lsi.detail}/>} size="m" onClick={this._handleDetail}>

          </UU5.Bricks.Button>
        </UU5.Bricks.Div>
      </UU5.Bricks.Div>
    )
  }
  //@@viewOff:render
});

export default ActivityTile;
