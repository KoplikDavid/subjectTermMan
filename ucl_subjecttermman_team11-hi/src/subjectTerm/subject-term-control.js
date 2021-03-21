import UU5 from "uu5g04";
import {createVisualComponent} from "uu5g04-hooks";
import Lsi from "./subject-term-control-lsi";
import StudentPickerHook from "../students/student-picker-hooks";

const SubjectTermControl = createVisualComponent({
  render(props) {
    console.log(props);
    return (
      <>
        <UU5.Bricks.ButtonGroup>
          <UU5.Bricks.Button content={<UU5.Bricks.Lsi lsi={Lsi.addStudent}/>}
                             onClick={() => props.itemHandlerMap.update({
                               "type": "addStudent",
                               "data": {
                                 "id": props.selectedSubjectTerm,
                                 "studentId": props.selectedStudent
                               }
                             })}/>
          <UU5.Bricks.Button content={<UU5.Bricks.Lsi lsi={Lsi.deleteStudent}/>}
                             onClick={() => {
                               props.itemHandlerMap.update({
                                 "type": "deleteStudent",
                                 "data": {
                                   "id": props.selectedSubjectTerm,
                                   "studentId": props.selectedStudent
                                 }
                               })
                             }}/>
        </UU5.Bricks.ButtonGroup>
        <StudentPickerHook students={props.data.data.students} selectItem={props.setSelectedStudent}/>
      </>
    )
  }
});

export default SubjectTermControl;
