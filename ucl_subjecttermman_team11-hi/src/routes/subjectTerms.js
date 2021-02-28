//@@viewOn:imports
import { createComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";

//@@viewOff:imports

const SubjectTerms = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "SubjectTerms",
  //@@viewOff:statics

  render() {
    //@viewOn:hooks
    const [selectedStudent, setSelectedStudent] = useState("");
    //@viewOff:hooks

    //@viewOn:private
    const handleChange = (e) => {
      setSelectedStudent(e.target.value);
    };
    //@viewOff:private

    //@@viewOn:render
    return (
      <div>

      </div>
    );
    //@@viewOff:render
  },
});

export default SubjectTerms;
