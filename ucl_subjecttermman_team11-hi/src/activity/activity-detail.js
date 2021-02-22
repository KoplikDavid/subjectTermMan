import UU5 from "uu5g04";
import Lsi from "./activity-detail-lsi";
import Calls from "../calls";


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
  _handleActivityDelete() {
    let dtoOut = {
      "id": this.props.data.id
    }
    return Calls.activityDelete(dtoOut)
  },

  _handleAddStudent() {
    let dtoOut = {
      "id": this.props.data.id,
      "studentId": this._inputUUid.getValue()
    }
    return Calls.activityAddStudent(dtoOut);
  },

  _handleAssessStudent() {
    let dtoOut = {
      "id": this.props.data.id,
      "studentId": this._inputUUid.getValue(),
      "score": this._inputScore.getValue()
    }
    return Calls.activityAssessStudent(dtoOut);
  },

  myFunction(total, value) {
  return JSON.stringify(total) + JSON.stringify(value);
},

  renderRow() {

  },


  //@@viewOff:private

  //@@viewOn:render

  render() {
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
              if (["activityType", "activityLink", "lifeCycleState","defaultTerm"].includes(key)) {
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
            header="Manage activity"
            content={<>
              <UU5.Bricks.Column>
                <UU5.Forms.TextArea
                  label='Activity link'
                  ref_={input => this._inputSetLink = input}
                  size="s"
                />
                <UU5.Forms.TextArea
                  label='State'
                  ref_={input => this._inputSetState = input}
                  size="s"
                />
              </UU5.Bricks.Column>
              <UU5.Bricks.ButtonGroup size="m" horizontal>
                <UU5.Bricks.Button content="delete" onClick={this._handleActivityDelete}/>
                <UU5.Bricks.Button content="set state"/>
                <UU5.Bricks.Button content="set link"/>
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
          <UU5.Bricks.Panel
            header="Manage student"
            content={<>
              {/*<StudentPicker handleChange={handleChange}/>*/}
              <UU5.Bricks.Column>
                <UU5.Bricks.Strong
                  content={this.props.data.activityDetails.reduce(this.myFunction)}
                />
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
                                   onClick={this._handleAddStudent}/>
                <UU5.Bricks.Button content="delete student"/>
                <UU5.Bricks.Button content="assess student"
                                   onClick= {this._handleAssessStudent}/>
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

