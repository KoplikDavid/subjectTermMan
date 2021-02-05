//@@viewOn:imports
import { createComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
import { subjectTerms } from "../../mock/data/subjectTerms";
import SubjectTermRow from "../bricks/subjectTerms/subjectTermRow";
import StudentPicker from "../bricks/utils/studentPicker";
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
        <StudentPicker handleChange={handleChange} />
        {selectedStudent &&
          subjectTerms.map(({ subjectTermStart, subjectTermEnd }, index) => (
            <SubjectTermRow start={subjectTermStart} end={subjectTermEnd} key={index} />
          ))}
      </div>
    );
    //@@viewOff:render
  },
});

export default SubjectTerms;
