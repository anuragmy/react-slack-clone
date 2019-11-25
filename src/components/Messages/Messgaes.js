import React, { Component } from "react";
import { Comment, Segment } from "semantic-ui-react";
import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessgaeForm";
import firebase from "../../firebase";

export default class Messgaes extends Component {
  state = {
    messagesRef: firebase.database().ref("messages"),
    channel: this.props.currentChannel,
    user: this.props.currentUser
  };

  render() {
    const { messagesRef, channel, user } = this.state;
    return (
      <React.Fragment>
        <MessagesHeader />

        <Segment>
          <Comment.Group className="messages">{/* {Messages} */}</Comment.Group>
        </Segment>
        <MessageForm
          currentUser={user}
          messagesRef={messagesRef}
          currentChannel={channel}
        />
      </React.Fragment>
    );
  }
}
