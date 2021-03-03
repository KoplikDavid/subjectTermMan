//@@viewOn:imports
import { createVisualComponent, useState, useDataList } from "uu5g04-hooks";
import Config from "./config/config";
import Calls from "../calls";
import SubjectTermPickerHook from "../subjectTerm/subject-term-picker-hooks";
import StudentPickerHook from "../students/student-picker-hooks";
import SubjectTermControl from "../subjectTerm/subject-term-control";

//@@viewOff:imports

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
        setState: Calls.subjectTermSetState,
        addStudent: Calls.subjectTermAddStudent,
        deleteStudent: Calls.subjectTermDeleteStudent,
        delete: Calls.subjectTermDelete,
      }
    });
    const { state, data, newData, errorData, pendingData, handlerMap, itemHandlerMap } = dataListResult;
    //@viewOff:hooks

    //@viewOn:private

    //@viewOff:private

    //@@viewOn:render
    return (
      <>
        <SubjectTermControl itemHandlerMap={itemHandlerMap} selectedSubjectTerm={selectedSubjectTerm} selectedStudent={selectedStudent}/>
        <span/>
        <SubjectTermPickerHook data={data} selectItem={setSelectedSubjectTerm} setSelectedData={setCurrentSubjectTermData}/>
        <StudentPickerHook data={currentSubjectTermData} selectItem={setSelectedStudent}/>
      </>
    );
    //@@viewOff:render
  },
});

export default SubjectTerms;
