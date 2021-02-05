//@@viewOn:imports
import { createComponent, useState } from "uu5g04-hooks";
import Config from "../../../../SubjectTermMan/uu_subjectTermMan_maing01-hi/src/routes/config/config";
import { activities } from "../../mock/data/activities";
import ActivityRow from "../bricks/activities/row";
import StudentPicker from "../bricks/utils/studentPicker";
//@@viewOff:imports

const Activities = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Activities",
  //@@viewOff:statics

  render() {
    //@@viewOn:hooks
    const [selectedStudent, setSelectedStudent] = useState("");
    //@@viewOff:hooks
    //@@viewOn:private

    const handleChange = (e) => {
      setSelectedStudent(e.target.value);
    };

    //@viewOff:private
    //@@viewOn:render
    return (
      <>
        <StudentPicker handleChange={handleChange} />
        {selectedStudent &&
          activities.map(({ activity, type }, index) => <ActivityRow key={index} activity={activity} type={type} />)}
      </>
    );
    //@@viewOff:render
  },
});

export default Activities;
