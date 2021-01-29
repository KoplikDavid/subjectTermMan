import Config from "./config/config";
import UU5 from "uu5g04";
import "uu5g04-bricks";
import Calls from "../calls";


const Activity = UU5.Common.VisualComponent.create({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin, UU5.Common.RouteMixin, UU5.Common.CcrReaderMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  displayName: Config.TAG + "Activity",
  //@@viewOff:statics

  render() {
    //@@viewOn:render
    return (
      <div>
        <h1>kurva</h1>

      </div>
    );
    //@@viewOff:render
  }
});

export default Activity;
