import UU5 from "uu5g04";
import {createVisualComponent, useRef} from "uu5g04-hooks";
import Lsi from "./subject-term-control-lsi";
import StudentPickerHook from "../students/student-picker-hooks";
import Config from "../routes/config/config";

const SubjectTermControl = createVisualComponent({
  //@@viewOn:propTypes
  propTypes: {
    students: UU5.PropTypes.array.isRequired,
    itemHandlerMap: UU5.PropTypes.object.isRequired,
    selectedSubjectTerm: UU5.PropTypes.string.isRequired,
    selectedStudent: UU5.PropTypes.string,
    setSelectedStudent: UU5.PropTypes.func.isRequired,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  //@@viewOn:statics
  displayName: Config.TAG + "SubjectTermControl",
  //@@viewOff:statics
  _confirm: undefined,

  render(props) {
    const _confirm = useRef();
    return (
      <>
        <UU5.Bricks.ConfirmModal
          ref_={confirm => _confirm.current = confirm}
          onConfirm={() => props.itemHandlerMap.update({
            "type": "deleteStudent",
            "data": {
              "id": props.selectedSubjectTerm,
              "studentId": props.selectedStudent
            }
          })}
          header={<UU5.Bricks.Lsi lsi={Lsi.deleteStudent}/>}
          content={<UU5.Bricks.Lsi lsi={Lsi.deleteQuestion}/>}
        />
        <UU5.Bricks.ButtonGroup>
          <UU5.Bricks.Button content={<UU5.Bricks.Lsi lsi={Lsi.addStudent}/>}
                             disabled={!!props.students.filter(student => student.studentId === props.selectedStudent).length}
                             onClick={() => props.itemHandlerMap.update({
                               "type": "addStudent",
                               "data": {
                                 "id": props.selectedSubjectTerm,
                                 "studentId": props.selectedStudent
                               }
                             })}/>
          <UU5.Bricks.Button content={<UU5.Bricks.Lsi lsi={Lsi.deleteStudent}/>}
                             disabled={!props.students.filter(student => student.studentId === props.selectedStudent).length}
                             onClick={() => _confirm.current.open()
                             }/>
        </UU5.Bricks.ButtonGroup>
        <StudentPickerHook students={props.students} selectItem={props.setSelectedStudent}/>
      </>
    )
  }
});

export default SubjectTermControl;
