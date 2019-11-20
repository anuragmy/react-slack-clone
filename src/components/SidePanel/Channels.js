import React, { Component } from "react";
import { Menu, Icon, Modal, Form, Input, Button } from "semantic-ui-react";
import firebase from "../../firebase";

class Channels extends Component {
  state = {
    channels: [],
    user: this.props.currentUser,
    modal: false,
    channelName: "",
    channelDetails: "",
    channelsRef: firebase.database().ref("channels")
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addChannel = () => {
    const { channelsRef, channelName, user } = this.state;
    console.log("add channedl opened");
    // const key = channelsRef.push().key;
    // const newChannel = {
    //   id: key,
    //   name: channelName,
    //   details: {
    //     createdBy: {
    //       name: user.displayName,
    //       avatar: user.photoUrl
    //     }
    //   }
    // };

    // channelsRef
    //   .child(key)
    //   .update(newChannel)
    //   .then(() => {
    //     this.setState({ channelName: "", channelDetails: "" });
    //     this.closeModal();
    //     console.log("channel added");
    //   })
    //   .catch(err => console.log(err));
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.isFormValid(this.state)) {
      console.log("channel added");
      this.setState({ [event.target.name]: event.target.value });
      console.log(this.state);
    }
  };

  isFormValid = ({ channelName, channelDetails }) => {
    channelName && channelDetails;
  };

  closeModal = () => this.setState({ modal: false });

  openModal = () => this.setState({ modal: true });

  render() {
    const { channels, modal } = this.state;
    return (
      <React.Fragment>
        <Menu.Menu style={{ paddingBottom: "2em" }}>
          <Menu.Item>
            <span>
              {" "}
              <Icon name="exchange">CHANNELS</Icon>
            </span>
            <Icon name="add" onClick={this.openModal} />
          </Menu.Item>
        </Menu.Menu>
        <Modal basic open={modal} onClose={this.closeModal}>
          <Modal.Header>Add a Channel</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field>
                <Input
                  label="Name of the Channel"
                  name="channelName"
                  fluid
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Input
                  label="About the Channel"
                  name="channelDetails"
                  fluid
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" inverted onClick={this.handleSubmit}>
              <Icon name="checkmark" /> Add
            </Button>
            <Button color="red" inverted onClick={this.closeModal}>
              <Icon name="remove" /> Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Channels;
