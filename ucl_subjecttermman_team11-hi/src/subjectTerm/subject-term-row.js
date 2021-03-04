import UU5 from "uu5g04";
import {createVisualComponent} from "uu5g04-hooks";
import Lsi from "./subject-term-row-lsi";
import SubjectTermControl from "./subject-term-control";

const SubjectTermRow = createVisualComponent({
    render(props) {
      return (
        <div onClick={() => console.log(props.data.data.termCode)}>
            <UU5.Bricks.Row display={"flex"}>
              <UU5.Bricks.Lsi lsi={Lsi.name}/>
              <UU5.Bricks.Strong content={props.data.data.subjectName}/>
              <UU5.Bricks.Lsi lsi={Lsi.termCode}/>
              <UU5.Bricks.Strong content={props.data.data.termCode}/>
              <UU5.Bricks.Lsi lsi={Lsi.lifeCycleState}/>
              <UU5.Bricks.Strong content={props.data.data.lifeCycleState}/>
              <SubjectTermControl itemHandlerMap={props.data} selectedSubjectTerm={props.data.data.id} selectedStudent={props.selectedStudent}/>
            </UU5.Bricks.Row>
        </div>
      )
  }
});

export default SubjectTermRow;
