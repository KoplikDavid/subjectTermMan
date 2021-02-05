//@@viewOn:imports
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config";
import { studentList } from "../../../mock/data/students";
//@@viewOff:imports

const StudentPicker = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "SubjectTerms",
  //@@viewOff:statics

  render({ handleChange }) {
    //@@viewOn:render
    return (
      <div>
        <label htmlFor="students">Choose a student:</label>

        <select name="students" id="students" onChange={handleChange}>
          <option disabled selected>
            -- select an option --
          </option>
          {studentList.map((student) => {
            const { firstName, lastName, studentId } = student;
            const option = `${firstName} ${lastName}`;
            return (
              <option value={option} key={studentId}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    );
    //@@viewOff:render
  },
});

export default StudentPicker;
