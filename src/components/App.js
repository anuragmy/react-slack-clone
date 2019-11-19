import React from "react";
import { Grid } from "semantic-ui-react";
import Colorpanel from "./ColorPanel/Colorpanel";
import Sidepanel from "./SidePanel/Sidepanel";
import Messages from "./Messages/Messgaes";
import Metapanel from "./Metapanel/Metapanel";

const App = () => {
  return (
    <Grid columns="equal" className="app" style={{ background: "#eee" }}>
      <Colorpanel />
      <Sidepanel />
      <Grid.Column style={{ marginLeft: 320 }}>
        <Messages />
      </Grid.Column>
      <Grid.Column width={4}>
        <Metapanel />
      </Grid.Column>
    </Grid>
  );
};
export default App;
