//TODO here you specify all the routes (still not visible in the menu)
// this represents the view for authenticated users

//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent, useState } from "uu5g04-hooks";
import Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-app";

import Config from "../core/config/config";
import Bottom from "../core/bottom";
import Home from "../routes/home";
import SubjectTerms from "../routes/subjectTerms";
import Left from "./left";
import Activities from "../routes/activities";
import Students from "../routes/students";
import StudentDetail from "../bricks/students/studentDetail";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "SpaAuthenticated",
  //@@viewOff:statics
};

const About = UU5.Common.Component.lazy(() =>
  import("../../../../SubjectTermMan/uu_subjectTermMan_maing01-hi/src/routes/about")
);
const InitAppWorkspace = UU5.Common.Component.lazy(() =>
  import("../../../../SubjectTermMan/uu_subjectTermMan_maing01-hi/src/routes/init-app-workspace")
);
const ControlPanel = UU5.Common.Component.lazy(() =>
  import("../../../../SubjectTermMan/uu_subjectTermMan_maing01-hi/src/routes/control-panel")
);

const DEFAULT_USE_CASE = "home";
const ROUTES = {
  "": DEFAULT_USE_CASE,
  home: { component: <Home /> },
  activities: { component: <Activities /> },
  subjectTerms: { component: <SubjectTerms /> },
  students: { component: <Students /> },
  about: { component: <About /> },
  "sys/uuAppWorkspace/initUve": { component: <InitAppWorkspace /> },
  controlPanel: { component: <ControlPanel /> },
};

export const SpaAuthenticated = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    let [initialActiveItemId] = useState(() => {
      let url = UU5.Common.Url.parse(window.location.href);
      return url.useCase || DEFAULT_USE_CASE;
    });
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Plus4U5.App.MenuProvider activeItemId={initialActiveItemId}>
        <Plus4U5.App.Page
          {...props}
          top={<Plus4U5.App.TopBt />}
          topFixed="smart"
          bottom={<Bottom />}
          type={3}
          displayedLanguages={["cs", "en"]}
          left={<Left />}
          leftWidth="!xs-300px !s-300px !m-288px !l-288px !xl-288px"
          leftFixed
          leftRelative="m l xl"
          leftResizable="m l xl"
          leftResizableMinWidth={220}
          leftResizableMaxWidth={500}
          isLeftOpen="m l xl"
          showLeftToggleButton
          fullPage
        >
          <Plus4U5.App.MenuConsumer>
            {({ setActiveItemId }) => {
              let handleRouteChanged = ({ useCase, parameters }) => setActiveItemId(useCase || DEFAULT_USE_CASE);
              return <UU5.Common.Router routes={ROUTES} controlled={false} onRouteChanged={handleRouteChanged} />;
            }}
          </Plus4U5.App.MenuConsumer>
        </Plus4U5.App.Page>
      </Plus4U5.App.MenuProvider>
    );
    //@@viewOff:render
  },
});

export default SpaAuthenticated;
