import UU5 from "uu5g04";
import {createVisualComponent} from "uu5g04-hooks";
import Lsi from "./subject-term-row-lsi";
import SubjectTermControl from "./subject-term-control";
import Config from "../routes/config/config";

const SubjectTermRow = createVisualComponent({
  //@@viewOn:propTypes
  propTypes: {
    data: UU5.PropTypes.object.isRequired,
    setSelectedStudent: UU5.PropTypes.func.isRequired,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  //@@viewOn:statics
  displayName: Config.TAG + "SubjectTermRow",
  //@@viewOff:statics

  render(props) {
    return (

      <UU5.BlockLayout.Row>
        <UU5.Bricks.Lsi lsi={Lsi.name}/>
        <UU5.Bricks.Strong content={props.data.data.subjectName}/>
        <UU5.Bricks.Lsi lsi={Lsi.termCode}/>
        <UU5.Bricks.Strong content={props.data.data.termCode}/>
        <UU5.Bricks.Lsi lsi={Lsi.lifeCycleState}/>
        <UU5.Bricks.Strong content={props.data.data.lifeCycleState}/>
        <SubjectTermControl students={props.data.data.students} itemHandlerMap={props.data.handlerMap}
                            selectedSubjectTerm={props.data.data.id} selectedStudent={props.selectedStudent}
                            setSelectedStudent={props.setSelectedStudent}/>
      </UU5.BlockLayout.Row>

    )
  }
});

export default SubjectTermRow;
