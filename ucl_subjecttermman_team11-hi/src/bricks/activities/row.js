//@@viewOn:imports
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config";
import Css from "../subjectTerms/subjectTermRow.css";
//@@viewOff:imports

const ActivityRow = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "SubjectTerms",
  //@@viewOff:statics

  render({ activity, type }) {
    //@@viewOn:render
    return (
      <div className={Css.rowContainer()}>
        <p>{activity}</p>
        <p>{type}</p>
        <button>Assign {type}</button>
      </div>
    );
    //@@viewOff:render
  },
});

export default ActivityRow;
