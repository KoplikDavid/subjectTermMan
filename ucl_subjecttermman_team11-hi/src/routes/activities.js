import UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu5g04-forms";
import "uu5tilesg01";
import Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-bricks";
import "uu_plus4u5g01-app";
import Calls from "../calls";
import ActivityList from "../activity/activity-list";


const Loader = UU5.Common.VisualComponent.create({
  mixins: [
    UU5.Common.BaseMixin, UU5.Common.LoadMixin
  ],

  statics: {},

  handelCalls() {
    const id ="601fa7258b21ee105087ab10";
    let task ={
      "subjectTermId": "601fa7258b21ee105087ab10",
      "order": "asc",
      "pageInfo": {
        "pageIndex": "0",
        "pageSize": "20"
      }
    }
    return Calls.activityList(task);
  },


  render() {
    return (
        <UU5.Common.ListDataManager
          pessimistic={this.state.pessimistic}
          onLoad={this.handelCalls}
          onCreate={Calls.create}
          onUpdate={Calls.update}
          onDelete={Calls.delete}
        >
          {({
              viewState, errorState, errorData, data, response,
              handleLoad, handleReload, handleCreate, handleUpdate, handleDelete
            }) => {
            return (
              <UU5.Bricks.Div>
                <UU5.Bricks.Button
                  disabled={!data}
                  onClick={() => {
                    handleLoad()
                      .then(data => console.log("load ok", data))
                      .catch(data => console.log("load ko", data))
                  }}
                >
                  Load
                </UU5.Bricks.Button>
                <UU5.Bricks.Button
                  disabled={!data}
                  colorSchema="primary"
                  onClick={() => {
                    handleReload()
                      .then(data => console.log("reload ok", data))
                      .catch(data => console.log("reload ko", data))
                  }}
                >
                  Reload
                </UU5.Bricks.Button>
                <UU5.Bricks.Button
                  disabled={!data}
                  colorSchema="success"
                  onClick={() => {
                    this._useModal(this.state.pessimistic).then(({ component, values }) => {
                      handleCreate({ id: UU5.Common.Tools.generateUUID(), ...values })
                        .then(data => {
                          component.saveDone(data);
                          console.log("create ok", data)
                        })
                        .catch(data => {
                          component.saveFail(data);
                          console.log("create ko", data)
                        })
                    });
                  }}
                >
                  Create
                </UU5.Bricks.Button>

                <ActivityList data={data}/>
              </UU5.Bricks.Div>
            )
          }}
          {/*@@viewOff:example*/}
        </UU5.Common.ListDataManager>
    )
  },
})
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
