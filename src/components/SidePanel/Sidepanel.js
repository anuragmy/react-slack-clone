import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import Userpanel from "./Userpanel";

export default class Sidepanel extends Component {
  render() {
    return (
      <Menu
        inverted
        size="large"
        fixed="left"
        vertical
        style={{ background: "#4c3c4c", fontSize: "1.2em" }}
      >
        <Userpanel />
      </Menu>
    );
  }
}
