//@@viewOn:imports
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config";
import { assignedTests } from "../../../mock/data/assignedTests";
import Css from "./availableTests.css";
//@@viewOff:imports

const AssignedTests = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "AvailableTests",
  //@@viewOff:statics

  render() {
    //@@viewOn:render
    return (
      <div className={Css.testContainer()}>
        {assignedTests.map(({ id, name, score, done }) => (
          <div key={id} className={Css.testRow()}>
            <p>{name}</p>
            {done ? <p>{score}/100</p> : <input type="number" />}
            <button>{done ? "Delete score" : "Add Score"}</button>
            <button>Unassign test</button>
          </div>
        ))}
      </div>
    );
    //@@viewOff:render
  },
});

export default AssignedTests;
