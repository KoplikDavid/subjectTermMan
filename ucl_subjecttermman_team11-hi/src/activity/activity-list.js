import UU5 from "uu5g04";
import ActivityTile from "./activity-tile";
import "uu5g04-bricks";
import "uu5g04-forms";
import "uu5tilesg01";
import "uu_plus4u5g01-bricks";
import "uu_plus4u5g01-app";

const ActivityList = UU5.Common.VisualComponent.create({
  renderTile(data){
    return <ActivityTile data={data}/>;
  },

  render() {
    return (
      <UU5.Bricks.Container header="Simple Tile List" level={1}>
        {(this.props.data.itemList.length > 0) ?
          /*@@viewOn:example*/
          <UU5.Bricks.Resize>
            <UU5.Tiles.List
              tile={this.renderTile}
              data={this.props.data.itemList}
              tileHeight={300}
              tileMinWidth={220}
              tileMaxWidth={300}
              tileSpacing={8}
              tileElevationHover={1}
              tileBorder
              tileStyle={{borderRadius: 4}}
              rowSpacing={8}
              tileJustify="space-between"
              scrollElement={window}
              selectable={true}
            />
          </UU5.Bricks.Resize>
          /*@@viewOff:example*/
          : <UU5.Bricks.Div className="center">Nothing to show ...</UU5.Bricks.Div>
        }
      </UU5.Bricks.Container>
    );
  }
});

export default ActivityList;
