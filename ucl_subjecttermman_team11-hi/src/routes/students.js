//@@viewOn:imports
import { createComponent, useState, useEffect } from "uu5g04-hooks";
import Config from "./config/config";
import { studentList } from "../../mock/data/students";
import StudentRow from "../bricks/students/studentRow";
//@@viewOff:imports

const Students = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Students",
  //@@viewOff:statics

  render({ newStudentList }) {
    //@viewOn:hooks
    const [students, setStudents] = useState(newStudentList || studentList);

    //@viewOff:hooks

    //@@viewOn:render
    return (
      <div>
        {students.map((student) => {
          return <StudentRow student={student} key={student.studentId} />;
        })}
      </div>
    );
    //@@viewOff:render
  },
});

export default Students;
