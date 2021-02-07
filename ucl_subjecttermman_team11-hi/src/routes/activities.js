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

  _getActions() {
    return [
      {
        content: {
          en: "Add Animal",
          cs: "Přidat zvíře"
        },
        onClick: () => console.log("Add animal"),
        icon: "mdi-plus-circle",
        active: true
      },
    ]
  },

  render() {
    return (
      <div>
          <ActivityList data={Calls.activityList()}/>
      </div>
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
