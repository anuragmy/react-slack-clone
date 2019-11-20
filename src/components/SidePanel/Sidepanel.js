import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import Userpanel from "./Userpanel";
import Channels from "./Channels";

class Sidepanel extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <Menu
        inverted
        size="large"
        fixed="left"
        vertical
        style={{ background: "#4c3c4c", fontSize: "1.2em" }}
      >
        <Userpanel currentUser={currentUser} />
        <Channels />
      </Menu>
    );
  }
}

export default Sidepanel;
