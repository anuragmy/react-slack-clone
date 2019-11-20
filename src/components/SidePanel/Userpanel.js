import React, { Component } from "react";
import { Grid, Header, Icon, Dropdown } from "semantic-ui-react";
import firebase from "../../firebase";

export default class Userpanel extends Component {
  dropDownOptions = () => [
    {
      key: "user",
      text: (
        <span>
          Signred in as <strong>User</strong>
        </span>
      ),
      disabled: true
    },
    {
      key: "change",
      text: <span>Change Avatar</span>
    },
    {
      key: "signout",
      text: <span onClick={this.handleSignOut}>Sign Out</span>
    }
  ];

  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("user signed out"));
  };

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
          <Header inverted as="h4" style={{ padding: "0.25em" }}>
            <Dropdown
              trigger={<span>User</span>}
              options={this.dropDownOptions()}
            />
          </Header>
        </Grid.Column>
      </Grid>
    );
  }
}
