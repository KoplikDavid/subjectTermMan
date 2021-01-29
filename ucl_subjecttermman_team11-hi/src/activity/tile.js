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
    tagName: "UU5.Tiles.ExampleTile",
    classNames: {
      main: "uu5-tiles-exampletile"
    }
  },
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
          <UU5.Bricks.Div style={{ paddingBottom: 8 }}>
            <UU5.Bricks.Icon icon="mdi-paw" style={{ marginRight: 8 }} />
            <UU5.Bricks.Strong style={{ marginRight: 8 }}>
              <UU5.Bricks.Lsi lsi={JSON.stringify(this.props.data)} />
            </UU5.Bricks.Strong>
          </UU5.Bricks.Div>
          <UU5.Bricks.Text colorSchema="green">
            <UU5.Bricks.Icon icon="mdi-earth" style={{ marginRight: 8 }} />
            <UU5.Bricks.Lsi lsi={this.props.data.location} />
          </UU5.Bricks.Text>
          <UU5.Bricks.Div className="uu5-common-font-size-s" style={{ flexGrow: 2 }}>
            <UU5.Bricks.Lsi lsi={this.props.data.description} />
          </UU5.Bricks.Div>
          <UU5.Bricks.Small>
            Třída:{"\xA0"}
            <UU5.Bricks.Strong><UU5.Bricks.Lsi lsi={this.props.data.class1} /></UU5.Bricks.Strong>,{" "}
            Řád:{"\xA0"}
            <UU5.Bricks.Strong><UU5.Bricks.Lsi lsi={this.props.data.order} /></UU5.Bricks.Strong>,{" "}
            Čeleď:{"\xA0"}
            <UU5.Bricks.Strong><UU5.Bricks.Lsi lsi={this.props.data.family} /></UU5.Bricks.Strong>
          </UU5.Bricks.Small>
        </UU5.Bricks.Div>
      </UU5.Bricks.Div>
    )
  }
  //@@viewOff:render
});

export default ActivityTile;
