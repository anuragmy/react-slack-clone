import React from "react";
import { Grid } from "semantic-ui-react";
import Colorpanel from "./ColorPanel/Colorpanel";
import Sidepanel from "./SidePanel/Sidepanel";
import Messages from "./Messages/Messgaes";
import Metapanel from "./Metapanel/Metapanel";
import { connect } from "react-redux";

const App = ({ currentUser, currentChannel }) => {
  return (
    <Grid columns="equal" className="app" style={{ background: "#eee" }}>
      <Colorpanel />
      <Sidepanel
        key={currentUser && currentUser.id}
        currentUser={currentUser}
      />
      <Grid.Column style={{ marginLeft: 320 }}>
        <Messages
          key={currentChannel && currentChannel.uid}
          currentChannel={currentChannel}
          currentUser={currentUser}
        />
      </Grid.Column>
      <Grid.Column width={4}>
        <Metapanel />
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel
});

export default connect(mapStateToProps)(App);
