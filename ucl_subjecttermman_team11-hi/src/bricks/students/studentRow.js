// TODO create propTypes and defaultProps

//@@viewOn:imports
import { createVisualComponent } from "uu5g04-hooks";
import UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "../config/config";
import Css from "./studentRow.css";
import StudentDetail from "./studentDetail";
//@@viewOff:imports

const StudentRow = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "StudentRow",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({ student, handleDelete }) {
    //@@viewOn:private
    const handleClick = () => {
      const { firstName, lastName, studentId } = student;
      UU5.Environment.setRoute({
        component: <StudentDetail firstName={firstName} lastName={lastName} uuid={studentId} />,
        url: { useCase: "studentDetail", parameters: { firstName, lastName, uuid: studentId } },
      });
    };
    //@@viewOff:private

    //@@viewOn:render
    return (
      <div className={Css.rowContainer()}>
        <span className={Css.firstName()}>{student.firstName}</span>
        <span>{student.lastName}</span>
        <UU5.Bricks.Button onClick={handleClick}>Detail</UU5.Bricks.Button>
      </div>
    );
    //@@viewOff:render
  },
});

export default StudentRow;
