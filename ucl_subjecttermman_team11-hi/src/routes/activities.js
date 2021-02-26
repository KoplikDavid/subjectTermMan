import UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu5g04-forms";
import "uu5tilesg01";
import Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-bricks";
import "uu_plus4u5g01-app";
import Calls from "../calls";
import ActivityList from "../activity/activity-list";
import SubjectTermPicker from "../subjectTerm/subject-term-picker";



const Loader = UU5.Common.VisualComponent.create({
  mixins: [
    UU5.Common.BaseMixin, UU5.Common.LoadMixin
  ],

  statics: {},

  reloadAfterSelect(reload){
    this.reload = reload;
  },

  setSubjectTermId(id) {
    this.subjectTermId = id;
    this.reload();
  },

  handleActivityCalls() {
    const subjectTermId = this.subjectTermId;
    if (!subjectTermId) return ;
    let task = {
      "subjectTermId": subjectTermId,
      "order": "asc",
      "pageInfo": {
        "pageIndex": "0",
        "pageSize": "20"
      }
    }
    return Calls.activityList(task);
  },

  handleSubjectTermCalls() {
    let task = {
      "order": "asc",
      "pageInfo": {
        "pageIndex": "0",
        "pageSize": "20"
      }
    }
    return Calls.subjectTermList(task);
  },


  render() {
    return (
      <>
        <UU5.Common.ListDataManager
          pessimistic={this.state.pessimistic}
          onLoad={this.handleSubjectTermCalls}
          onCreate={Calls.create}
          onUpdate={Calls.update}
          onDelete={Calls.delete}
        >
          {({
              data
            }) => {
            return (
              <UU5.Bricks.Div>
                <SubjectTermPicker data={data} selectItem={this.setSubjectTermId}/>
              </UU5.Bricks.Div>
            )
          }}
          {/*@@viewOff:example*/}
        </UU5.Common.ListDataManager>
        <UU5.Common.ListDataManager
          pessimistic={this.state.pessimistic}
          onLoad={this.handleActivityCalls}
          onCreate={Calls.create}
          onUpdate={Calls.update}
          onDelete={Calls.delete}
        >
          {({
              viewState, errorState, errorData, data, response,
              handleLoad, handleReload, handleCreate, handleUpdate, handleDelete
            }) => {
            this.reloadAfterSelect(handleReload);
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
                  colorSchema="success"
                  onClick={() => {
                    this._useModal(this.state.pessimistic).then(({component, values}) => {
                      handleCreate({id: UU5.Common.Tools.generateUUID(), ...values})
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
      </>
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
