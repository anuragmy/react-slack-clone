import React, { Component } from "react";
import { Grid, Header, Icon, Dropdown, Image } from "semantic-ui-react";
import firebase from "../../firebase";

class Userpanel extends Component {
  state = {
    user: this.props.currentUser
  };

  componentDidMount() {
    this.setState({ user: this.props.currentUser });
    console.log("this is", this.state.user);
  }

  dropDownOptions = () => [
    {
      key: "user",
      text: (
        <span>
          Signred in as{" "}
          <strong>{this.state.user && this.state.user.displayName}</strong>
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
    console.log(this.props.currentUser);
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
            <Header inverted as="h4" style={{ padding: "0.25em" }}>
              <Dropdown
                trigger={
                  <span>
                    {/* <Image
                      src={this.state.user.photoUrl}
                      spaced="right"
                      
                    /> */}
                    {this.state.user.displayName}
                  </span>
                }
                options={this.dropDownOptions()}
              />
            </Header>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Userpanel;
