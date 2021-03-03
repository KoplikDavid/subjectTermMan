import UU5 from "uu5g04";
import {createComponent, useRef} from "uu5g04-hooks";
import Lsi from "./subject-term-picker-lsi";

const SubjectTermPickerHook = createComponent({
    render(props) {
      const dropdownRef = useRef();
    return (
      <>
        {(props.data && props.data.length > 0) ?
          <UU5.Bricks.Dropdown
            label={<UU5.Bricks.Lsi lsi={Lsi.header}/>}
            size="xl"
            colorSchema="blue"
            disableBackdrop
            elevationHover="5"
            popoverLocation="portal"
            ref_={(dropdown) => dropdownRef.current = dropdown}>
            {props.data.map((item) => <UU5.Bricks.Dropdown.Item label={item.data.termCode} key={item.data.termCode} onClick={() => {
              props.selectItem(item.data.id);
              props.setSelectedData(item.data);
            }}/>)}
          </UU5.Bricks.Dropdown>
          : <UU5.Bricks.Div className="center">{<UU5.Bricks.Lsi lsi={Lsi.empty}/>}</UU5.Bricks.Div>
        }
      </>
    )
  },
});

export default SubjectTermPickerHook;
