import UU5 from "uu5g04";
import Lsi from "./students-picker-lsi";

const StudentsPicker = UU5.Common.VisualComponent.create({

  filterData() {
    this.props.data.filter(subjectTerm => subjectTerm.id === this.props.subjectTermId)
  },

  renderItem(item) {
    return (
      <UU5.Bricks.Dropdown.Item label={item.students.studentId} key={item.students.studentId} onClick={() => this.props.selectItem(item.students.studentId)}/>
    )
  },


  render() {
    return (
      <>
        {(this.props.data && this.props.data.length > 0 && this.props.subjectTermId) ?
          <UU5.Bricks.Dropdown
            label={<UU5.Bricks.Lsi lsi={Lsi.header}/>}
            size="xl"
            colorSchema="blue"
            disableBackdrop
            elevationHover="5"
            popoverLocation="portal"
            ref_={(dropdown) => this.dropdown = dropdown}>
            {this.props.data.filterData.map(this.renderItem)}
          </UU5.Bricks.Dropdown>
          : <UU5.Bricks.Div className="center">{<UU5.Bricks.Lsi lsi={Lsi.empty}/>}</UU5.Bricks.Div>
        }
      </>
    )
  }
});

export default StudentsPicker;
