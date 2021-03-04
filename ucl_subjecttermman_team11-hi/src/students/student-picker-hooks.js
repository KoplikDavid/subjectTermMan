import UU5 from "uu5g04";
import {createVisualComponent, useRef} from "uu5g04-hooks";
import Lsi from "./students-picker-lsi";

const StudentPickerHook = createVisualComponent({
    render(props) {
      const dropdownRef = useRef();
    return (
      <>
        {(props.data) ?
          <UU5.Bricks.Dropdown
            label={<UU5.Bricks.Lsi lsi={Lsi.header}/>}
            size="xl"
            colorSchema="blue"
            disableBackdrop
            elevationHover="5"
            popoverLocation="portal"
            ref_={(dropdown) => dropdownRef.current = dropdown}>
            {props.data.students.map((student) => <UU5.Bricks.Dropdown.Item label={student.studentId} key={student.studentId} onClick={() => props.selectItem(student.studentId)}/>)}
          </UU5.Bricks.Dropdown>
          : <UU5.Bricks.Div className="center">{<UU5.Bricks.Lsi lsi={Lsi.empty}/>}</UU5.Bricks.Div>
        }
      </>
    )
  },
});

export default StudentPickerHook;
