//@@viewOn:imports
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config";
import { availableTests } from "../../../mock/data/availableTests";
import Css from "./availableTests.css";
//@@viewOff:imports

const AvailableTests = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "AvailableTests",
  //@@viewOff:statics

  render() {
    //@@viewOn:render
    return (
      <div className={Css.testContainer()}>
        {availableTests.map((test) => (
          <div key={test.id} className={Css.testRow()}>
            <p>{test.name}</p>
            <button>Assign test</button>
          </div>
        ))}
      </div>
    );
    //@@viewOff:render
  },
});

export default AvailableTests;
