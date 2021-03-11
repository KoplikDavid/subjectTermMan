//@@viewOn:imports
import { createVisualComponent, useState, useDataList } from "uu5g04-hooks";
import Config from "./config/config";
import Calls from "../calls";
import SubjectTermPickerHook from "../subjectTerm/subject-term-picker-hooks";
import StudentPickerHook from "../students/student-picker-hooks";
import SubjectTermRow from "../subjectTerm/subject-term-row";
import allStudents from "../../mock/allStudents"
//@@viewOff:imports

function subjectTermCalls(data) {
  const callMap = {
    "setState": Calls.subjectTermSetState,
    "addStudent": Calls.subjectTermAddStudent,
    "deleteStudent": Calls.subjectTermDeleteStudent
  }
  const call = callMap[data.type];

  return call(data.data);
}

const SubjectTerms = createVisualComponent({
  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  //@@viewOn:statics
  displayName: Config.TAG + "SubjectTerms",
  //@@viewOff:statics

  render(props) {
    //@viewOn:hooks
    const [selectedSubjectTerm, setSelectedSubjectTerm] = useState();
    const [selectedStudent, setSelectedStudent] = useState();
    const [currentSubjectTermData, setCurrentSubjectTermData] = useState();
    const pageSize = 20;
    const dataListResult = useDataList({
      pageSize,
      handlerMap: {
        load: Calls.subjectTermList,
        createItem: Calls.subjectTermCreate,
      },
      itemHandlerMap: {
        update: subjectTermCalls,
        delete: Calls.subjectTermDelete,
      }
    });
    const { state, data, newData, errorData, pendingData, handlerMap } = dataListResult;
    //@viewOff:hooks

    //@viewOn:private

    //@viewOff:private

    //@@viewOn:render
    return (
      <>
        <SubjectTermPickerHook data={data} selectItem={setSelectedSubjectTerm} setSelectedData={setCurrentSubjectTermData}/>
        <StudentPickerHook data={allStudents} selectItem={setSelectedStudent}/>
        {data ? (data.map((term) => <SubjectTermRow data={term} key={term.data.termCode} selectedStudent={selectedStudent}/>)) : <h1>No data</h1>}
      </>
    );
    //@@viewOff:render
  }
});

export default SubjectTerms;
