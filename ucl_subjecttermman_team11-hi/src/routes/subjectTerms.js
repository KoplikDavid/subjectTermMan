//@@viewOn:imports
import { createVisualComponent, useState, useDataList } from "uu5g04-hooks";
import Config from "./config/config";
import Calls from "../calls";
import SubjectTermPickerHook from "../subjectTerm/subject-term-picker-hooks";
import StudentPickerHook from "../students/student-picker-hooks";
import SubjectTermRow from "../subjectTerm/subject-term-row";
import allStudents from "../../mock/allStudents"
import UU5 from "uu5g04";
//@@viewOff:imports

function subjectTermCalls(callData) {
  const callMap = {
    "setState": Calls.subjectTermSetState,
    "addStudent": Calls.subjectTermAddStudent,
    "deleteStudent": Calls.subjectTermDeleteStudent
  }
  const call = callMap[callData.type];

  return call(callData.data);
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
    const [selectedStudent, setSelectedStudent] = useState();
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
    const { data, errorData, } = dataListResult;
    //@viewOff:hooks

    //@viewOn:private

    //@viewOff:private

    //@@viewOn:render
    return (
      <>
        {errorData ? <UU5.Common.Error bgStyle={this.state.bgStyle} errorData={errorData} colorSchema="default" content="default" />:<></>}
        <StudentPickerHook students={allStudents.students} selectItem={setSelectedStudent}/>
        {data ? (data.map((term) => <SubjectTermRow data={term} key={term.data.termCode} selectedStudent={selectedStudent} setSelectedStudent={setSelectedStudent}/>)) : <h1>No data</h1>}
      </>
    );
    //@@viewOff:render
  },
});

export default SubjectTerms;
