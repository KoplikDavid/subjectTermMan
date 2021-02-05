//@@viewOn:imports
import { createVisualComponent, useState } from "uu5g04-hooks";
import Students from "../../routes/students";
import Config from "../config/config";
import AssignedTests from "./assignedTests";
import AvailableTests from "./availableTests";
import StudentSubjectTerms from "./subjectTerms";
import { studentList } from "../../../mock/data/students";
//@@viewOff:imports

const StudentDetail = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "StudentDetail",
  //@@viewOff:statics

  render({ firstName, lastName, uuid }) {
    //@viewOn:hooks
    const [activeTab, setActiveTab] = useState("");
    //@viewOff:hooks

    //@viewOn:private
    const handleDelete = () => {
      const filtered = studentList.filter((student) => student.studentId !== uuid);
      UU5.Environment.setRoute({
        component: <Students newStudentList={filtered} />,
      });
    };
    //@viewOff:private

    //@@viewOn:render
    return (
      <>
        <div>
          <p>{firstName}</p>
          <p>{lastName}</p>
          <p>{uuid}</p>
        </div>
        <div>
          <button onClick={() => setActiveTab("available")}>Available tests</button>
          <button onClick={() => setActiveTab("assigned")}>Assigned tests</button>
          <button onClick={() => setActiveTab("terms")}> Subject terms</button>
          <button onClick={handleDelete}>Delete student</button>
        </div>
        {activeTab === "available" && <AvailableTests />}
        {activeTab === "assigned" && <AssignedTests />}
        {activeTab === "terms" && <StudentSubjectTerms />}
      </>
    );
    //@@viewOff:render
  },
});

export default StudentDetail;
