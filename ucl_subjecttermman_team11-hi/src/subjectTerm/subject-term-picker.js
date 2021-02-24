import UU5 from "uu5g04";

const SubjectTermPicker = UU5.Common.VisualComponent.create({

  renderItem(item) {
    return (
      <UU5.Bricks.Dropdown.Item label={item.termCode} key={item.termCode} onClick={() => this.props.selectItem(item.id)}/>
    )
  },


  render() {
    return (
      <>
        {(this.props.data && this.props.data.length > 0) ?
          <UU5.Bricks.Dropdown
            label="Dropdown"
            size="l"
            colorSchema="blue"
            disableBackdrop
            elevationHover="5"
            popoverLocation="portal"
            ref_={(dropdown) => this.dropdown = dropdown}>
            {this.props.data.map(this.renderItem)}
          </UU5.Bricks.Dropdown>
          : <UU5.Bricks.Div className="center">SubjectTerm are not loaded</UU5.Bricks.Div>
        }
      </>
    )
  }
});

export default SubjectTermPicker;
