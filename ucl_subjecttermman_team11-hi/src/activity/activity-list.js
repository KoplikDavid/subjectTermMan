import UU5 from "uu5g04";
import ActivityTile from "./activity-tile";
import "uu5g04-bricks";
import "uu5g04-forms";
import "uu5tilesg01";
import "uu_plus4u5g01-bricks";
import "uu_plus4u5g01-app";
import ActivityDetail from "./activity-detail";
import {removeRouteParameters, setRouteParameters} from "../helpers/history-helper";

const ActivityList = UU5.Common.VisualComponent.create({

  _handleDetailOpen(record) {
    setRouteParameters({ id: record.id });
  },

  _handleDetailClose(opt) {
    removeRouteParameters();
    opt.component.onCloseDefault(opt);
  },

  _registerModal(cmp) {
    this._modal = cmp;
  },

  _handleDetail(activity) {
    this._modal.open(
      {
        header: <p>test</p>,
        content: <ActivityDetail data={activity}/>,
        onClose: this._handleDetailClose
      },
      () => this._handleDetailOpen(activity)
    );
  },

  renderTile(data) {
    return <ActivityTile
      data={data}
      onDetail={this._handleDetail}
    />;
  },

  render() {
    return (
      <UU5.Bricks.Div>
        <UU5.Bricks.Modal ref_={this._registerModal} onClose={this._handleDetailClose}/>
        <UU5.Bricks.Container header="Activity List" level={1}>
          {(this.props.data.itemList.length > 0) ?
            /*@@viewOn:example*/
            <UU5.Bricks.Resize>
              <UU5.Tiles.List
                tile={this.renderTile}
                data={this.props.data.itemList}
                tileHeight={180}
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
            : <UU5.Bricks.Div className="center">Choose subject term to show activity</UU5.Bricks.Div>
          }
        </UU5.Bricks.Container>
      </UU5.Bricks.Div>
    );
  }
});

export default ActivityList;
