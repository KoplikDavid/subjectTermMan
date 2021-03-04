import UU5 from "uu5g04";
import {createVisualComponent} from "uu5g04-hooks";
import Lsi from "./subject-term-control-lsi";

const SubjectTermControl = createVisualComponent({
    render(props) {
    return (
          <UU5.Bricks.ButtonGroup>
            <UU5.Bricks.Button content={<UU5.Bricks.Lsi lsi={Lsi.addStudent}/>}
                               onClick={() => props.itemHandlerMap("addStudent",{
                                 "id" : props.selectedSubjectTerm,
                                 "studentId" : props.selectedStudent
                               })}/>
            <UU5.Bricks.Button content={<UU5.Bricks.Lsi lsi={Lsi.deleteStudent}/>}
                               onClick={() => {
                                 props.itemHandlerMap("deleteStudent",{
                                 "id" : props.selectedSubjectTerm,
                                 "studentId" : props.selectedStudent
                               })}}/>
          </UU5.Bricks.ButtonGroup>
    )
  }
});

export default SubjectTermControl;
