//@@viewOn:imports
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config";
import { subjectTerms } from "../../../mock/data/subjectTerms";
import Css from "./availableTests.css";
//@@viewOff:imports

const StudentSubjectTerms = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "AvailableTests",
  //@@viewOff:statics

  render() {
    //@@viewOn:render
    return (
      <div className={Css.testContainer()}>
        {subjectTerms.map(({ subjectTermStart, subjectTermEnd, enrolled }, index) => (
          <div key={index} className={Css.testRow()}>
            <span>{subjectTermStart}</span>
            <span>{subjectTermEnd}</span>
            <button>{enrolled ? "Add student" : "Delete student"}</button>
          </div>
        ))}
      </div>
    );
    //@@viewOff:render
  },
});

export default StudentSubjectTerms;
