//make this reusable
//@@viewOn:imports
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config";
import Css from "./subjectTermRow.css";
//@@viewOff:imports

const SubjectTermRow = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "SubjectTerms",
  //@@viewOff:statics

  render({ start, end }) {
    //@@viewOn:render
    return (
      <div className={Css.rowContainer()}>
        <p>From {start}</p>
        <p>To {end}</p>
        <button>Add Student</button>
      </div>
    );
    //@@viewOff:render
  },
});

export default SubjectTermRow;
