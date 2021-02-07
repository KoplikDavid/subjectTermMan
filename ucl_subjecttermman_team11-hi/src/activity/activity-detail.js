import UU5 from "uu5g04";
import Lsi from "./activity-detail-lsi";

const ActivityDetail = UU5.Common.VisualComponent.create({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: "UU5.ActivityTile",
    classNames: {
      main: "uu5-tiles-ActivityTile"
    }
  },
  //@@viewOff:statics


  //@@viewOn:private
  _handleDelete() {

  },

  _handleAddStudent(uuIdentity) {
    let dtoOut = {
      "id": this.props.data.id,
      "studentId": uuIdentity
    }
    alert(JSON.stringify(dtoOut));
  },

  _handleAssessStudent(uuIdentity, score) {
    let dtoOut = {
      "id": this.props.data.id,
      "studentId": uuIdentity,
      "score": score
    }
    alert(JSON.stringify(dtoOut));
  },


  //@@viewOff:private

  //@@viewOn:render
  renderHeader() {
    return (
      <>
        My funny joke
      </>
    );
  },

  render() {
    //@viewOn:hooks
    //FIX ME vyhazuje crosorigin error??? posledni cast v renderu v panelu
    // const [selectedStudent, setSelectedStudent] = useState("");
    //@viewOff:hooks

    //@viewOn:private
    // const handleChange = (e) => {
    //   setSelectedStudent(e.target.value);
    // };
    //@viewOff:private

    let mainProps = this.getMainPropsToPass();
    mainProps.style = {...mainProps.style, ...{height: "100%", width: "100%"}};
    return (
      <UU5.Bricks.Div {...mainProps}>
        <UU5.Bricks.Div
          style={{
            position: "relative",
            width: "100%",
            height: "70%",
            overflow: "hidden",
            padding: 8,
            display: "flex",
            flexDirection: "column",
            margin: 10
          }}
        >
          <UU5.Bricks.Heading><UU5.Bricks.Lsi lsi={Lsi.header}/></UU5.Bricks.Heading>
          <UU5.Bricks.Row>
            {Object.entries(this.props.data).map(([key, value]) => {
              if (["activityType", "activityLink", "lifeCycleState"].includes(key)) {
                return (
                  <UU5.Bricks.Column>
                    <UU5.Bricks.Small>
                      <UU5.Bricks.Strong style={{margin: 10}}><UU5.Bricks.Lsi lsi={Lsi[key]}/></UU5.Bricks.Strong>
                    </UU5.Bricks.Small>
                    <UU5.Bricks.Small>
                      <UU5.Bricks.Strong>{value}</UU5.Bricks.Strong>
                    </UU5.Bricks.Small>
                  </UU5.Bricks.Column>
                )
              }
            })
            }
          </UU5.Bricks.Row>
          <UU5.Bricks.Row>
            <UU5.Bricks.ButtonGroup size="m" horizontal>
              <UU5.Bricks.Button content="delete"/>
            </UU5.Bricks.ButtonGroup>
          </UU5.Bricks.Row>
        </UU5.Bricks.Div>
        <UU5.Bricks.Div
          style={{
            position: "relative",
            width: "100%",
            height: "30%",
            overflow: "hidden",
            padding: 8,
            display: "flex",
            flexDirection: "column"
          }}
        >
          <UU5.Bricks.Panel
            header="Manage student"
            content={<>
              {/*<StudentPicker handleChange={handleChange}/>*/}
              <UU5.Bricks.Column>
                <UU5.Forms.TextArea
                  label='Studen uuIdentity'
                  ref_={input => this._inputUUid = input}
                  size="s"
                />
                <UU5.Forms.TextArea
                  label='Score'
                  ref_={input => this._inputScore = input}
                  size="s"
                />
              </UU5.Bricks.Column>
              <UU5.Bricks.ButtonGroup size="m" horizontal>
                <UU5.Bricks.Button content="add student"
                                   onClick={() => this._handleAddStudent(this._inputUUid.getValue())}/>
                <UU5.Bricks.Button content="delete student"/>
                <UU5.Bricks.Button content="assess student"
                                   onClick={() => this._handleAssessStudent(this._inputUUid.getValue(), this._inputScore.getValue())}/>
              </UU5.Bricks.ButtonGroup>
            </>
            }
            colorSchema={this.state.colorSchema === "null" ? null : this.state.colorSchema}
            colorSchemaHeader={"primary"}
            colorSchemaContent={"primary"}
            bgStyle={"underline"}
            bgStyleHeader={this.state.bgStyleHeader === "null" ? null : this.state.bgStyleHeader}
            bgStyleContent={this.state.bgStyleContent === "null" ? null : this.state.bgStyleContent}
            iconExpanded="mdi-chevron-up" iconCollapsed="mdi-chevron-down"
            openClick={this.state.openClick === "null" ? null : this.state.openClick}
          />

        </UU5.Bricks.Div>
      </UU5.Bricks.Div>
    )
  }
//@@viewOff:render
});

export default ActivityDetail;

