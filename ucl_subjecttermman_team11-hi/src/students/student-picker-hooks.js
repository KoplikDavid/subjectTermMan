import UU5 from "uu5g04";
import {createVisualComponent, useRef} from "uu5g04-hooks";
import Lsi from "./students-picker-hook-lsi";
import Config from "../routes/config/config";

const StudentPickerHook = createVisualComponent({
  //@@viewOn:propTypes
  propTypes: {
    students: UU5.PropTypes.array.isRequired,
    selectItem: UU5.PropTypes.func.isRequired,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  //@@viewOn:statics
  displayName: Config.TAG + "StudentPickerHook",
  //@@viewOff:statics


    render(props) {
      const dropdownRef = useRef();
    return (
      <>
          {(props.students) ? (
            (props.students.length) ?
            <UU5.Bricks.Dropdown
            label={<UU5.Bricks.Lsi lsi={Lsi.header}/>}
            size="m"
            colorSchema="blue"
            disableBackdrop
            elevationHover="5"
            popoverLocation="portal"
            ref_={(dropdown) => dropdownRef.current = dropdown}>
          {props.students.map((student) => <UU5.Bricks.Dropdown.Item label={student.studentId}
            key={student.studentId}
            onClick={() => props.selectItem(student.studentId)}/>)}
            </UU5.Bricks.Dropdown>
            : <UU5.Bricks.Div className="center">{<UU5.Bricks.Lsi lsi={Lsi.empty}/>}</UU5.Bricks.Div>
          ): <></>}
      </>
    )
  },
});

export default StudentPickerHook;
