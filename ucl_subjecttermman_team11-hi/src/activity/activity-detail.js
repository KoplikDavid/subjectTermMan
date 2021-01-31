import UU5 from "uu5g04";

<UU5.Bricks.Panel
  header="Nam efficitur aliquam justo, ac rhoncus dolor gravida sed."
  content="Ut nec nunc dui. Praesent eget urna rhoncus, facilisis sem at, vestibulum nibh. Aliquam cursus purus sapien, ac facilisis est malesuada at. Fusce accumsan, mi ut volutpat posuere, neque elit tincidunt arcu, vel venenatis odio elit sed mi. Sed porttitor, orci quis dignissim elementum, velit nunc tristique tellus, at ullamcorper orci ex eget lacus."
  colorSchema={this.state.colorSchema === "null" ? null : this.state.colorSchema}
  colorSchemaHeader={this.state.colorSchemaHeader === "null" ? null : this.state.colorSchemaHeader}
  colorSchemaContent={blue}
  bgStyle={underline}
  bgStyleHeader={this.state.bgStyleHeader === "null" ? null : this.state.bgStyleHeader}
  bgStyleContent={this.state.bgStyleContent === "null" ? null : this.state.bgStyleContent}
  iconExpanded="mdi-chevron-up" iconCollapsed="mdi-chevron-down"
  openClick={this.state.openClick === "null" ? null : this.state.openClick}
/>
