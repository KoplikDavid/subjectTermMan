import {Client} from "uu_appg01";
import UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu5g04-forms";
import "uu5tilesg01";
import Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-bricks";
import "uu_plus4u5g01-app";
import Calls from "../calls";
import ActivityList from "../activity/activity-list";
import ActivityTile from "../activity/activity-tile";


const BINARY_URL = "https://uuos9.plus4u.net/uu-bookkitg01-main/78462435-5c73a1fdb9a14b4aaff232962752c9b6/getBinaryData";

const ExampleTile = UU5.Common.VisualComponent.create({
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
    mainProps.style = {...mainProps.style, ...{height: "100%", width: "100%"}};

    return (
      <UU5.Bricks.Div {...mainProps}>
        <UU5.Bricks.Div
          style={{position: "relative", width: "100%", height: "60%", overflow: "hidden", background: "#f5f5f5"}}>
          <Plus4U5.Bricks.Image
            src={BINARY_URL + "?code=" + this.props.data.img}
            alt={this.props.data.img}
            responsive={false}
            style={{
              width: "100%",
              position: "absolute",
              top: "-50%",
              left: 0,
              right: 0,
              bottom: "-50%",
              margin: "auto"
            }}
          />
        </UU5.Bricks.Div>
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
          <UU5.Bricks.Div style={{paddingBottom: 8}}>
            <UU5.Bricks.Icon icon="mdi-paw" style={{marginRight: 8}}/>
            <UU5.Bricks.Strong style={{marginRight: 8}}>
              <UU5.Bricks.Lsi lsi={this.props.data.speciesName}/>
            </UU5.Bricks.Strong>
            <UU5.Bricks.Em>
              <UU5.Bricks.Small>({this.props.speciesTaxonomyName})</UU5.Bricks.Small>
            </UU5.Bricks.Em>
          </UU5.Bricks.Div>
          <UU5.Bricks.Text colorSchema="green">
            <UU5.Bricks.Icon icon="mdi-earth" style={{marginRight: 8}}/>
            <UU5.Bricks.Lsi lsi={this.props.data.location}/>
          </UU5.Bricks.Text>
          <UU5.Bricks.Div className="uu5-common-font-size-s" style={{flexGrow: 2}}>
            <UU5.Bricks.Lsi lsi={this.props.data.description}/>
          </UU5.Bricks.Div>
          <UU5.Bricks.Small>
            Třída:{"\xA0"}
            <UU5.Bricks.Strong><UU5.Bricks.Lsi lsi={this.props.data.class1}/></UU5.Bricks.Strong>,{" "}
            Řád:{"\xA0"}
            <UU5.Bricks.Strong><UU5.Bricks.Lsi lsi={this.props.data.order}/></UU5.Bricks.Strong>,{" "}
            Čeleď:{"\xA0"}
            <UU5.Bricks.Strong><UU5.Bricks.Lsi lsi={this.props.data.family}/></UU5.Bricks.Strong>
          </UU5.Bricks.Small>
        </UU5.Bricks.Div>
      </UU5.Bricks.Div>
    )
  }
  //@@viewOff:render
});
const Example = UU5.Common.VisualComponent.create({
  renderTile(data){
    console.log("example",data);
    return <div>aaa</div>;
  },

  render() {
    return (
      <UU5.Bricks.Container header="Example Tile List" level={1}>
        {(this.props.data.length > 0) ?
          /*@@viewOn:example*/
          <UU5.Bricks.Resize>
            {/*<h1>{JSON.stringify(Calls.activityList())}</h1>*/}
            {/*<UU5.Tiles.ListController*/}
            {/*  onLoad={Calls.activityList}*/}
            {/*  ref_={r => this._lc = r}*/}
            {/*  controlled={false}*/}
            {/*>*/}
              <UU5.Tiles.List
                tile={this.renderTile}
                data={this.props.data}
                tileHeight={300}
                tileMinWidth={220}
                tileMaxWidth={400}
                tileSpacing={8}
                tileElevationHover={1}
                tileBorder
                tileStyle={{borderRadius: 4}}
                rowSpacing={8}
                tileJustify="space-between"
                scrollElement={window}
              />
            {/*</UU5.Tiles.ListController>*/}
          </UU5.Bricks.Resize>
          /*@@viewOff:example*/
          : <UU5.Bricks.Div className="center">Nothing to show ...</UU5.Bricks.Div>
        }
      </UU5.Bricks.Container>
    );
  }
});
const streamToString = (stream, encoding = "utf-8") => {
  return window.TextDecoder
    ? new window.TextDecoder(encoding).decode(stream)
    : decodeURIComponent(escape(stream.map(char => String.fromCharCode(char)).join("")));
};

const Loader = UU5.Common.VisualComponent.create({
  mixins: [
    UU5.Common.BaseMixin, UU5.Common.LoadMixin
  ],

  statics: {
    calls: {
      onLoad: "loadJson"
    }
  },

  componentWillMount() {
    this.setCalls({
      loadJson: dtoIn => {
        Client.get(BINARY_URL, {code: "basicExampleData"}).then(
          response => {
            let data = response.data instanceof Uint8Array ? JSON.parse(streamToString(response.data)) : response.data;
            window.serverData = data;
            dtoIn.done(data);
          },
          response => dtoIn.fail(response)
        );
      }
    });
  },

  render() {
    return this.getLoadFeedbackChildren((dtoOut) => {
      console.log("tady", dtoOut)
      return <div>
        <ActivityTile data={Calls.oneActivity()}/>
        <ActivityList data={Calls.activityList()}/>
        <Example data={dtoOut}/>
      </div>
    });
  }
});

const Activities = UU5.Common.VisualComponent.create({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.IdentityMixin
  ],
  //@@viewOff:mixins

  render() {
    return this.isAuthenticated() ? <Loader/> : <Plus4U5.App.Login/>;
  }
});

export default Activities;
