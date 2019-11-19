import React, { Component } from "react";
import { Grid, Header, Icon } from "semantic-ui-react";

export default class Userpanel extends Component {
  render() {
    return (
      <Grid style={{ background: "#4c3c4c" }}>
        <Grid.Column>
          <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
            <Header inverted floated="left" as="h2">
              <Header.Content>
                <Icon name="code" />
                Dev Chat
              </Header.Content>
            </Header>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}
