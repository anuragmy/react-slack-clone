import React, { Component } from "react";
import { Comment, Segment, Message } from "semantic-ui-react";
import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessgaeForm";
import firebase from "../../firebase";
import DisplayMessages from "./DisplayMessages";

export default class Messgaes extends Component {
  state = {
    messagesRef: firebase.database().ref("messages"),
    channel: this.props.currentChannel,
    user: this.props.currentUser,
    messages: "",
    messgaesLoading: false
  };

  componentDidMount() {
    const { channel, user } = this.state;
    if (channel && user) {
      this.addListerners(channel.id);
    }
  }

  addListerners = channelId => {
    this.addMessageListeners(channelId);
  };

  addMessageListeners = channelId => {
    let loadedMessages = [];
    this.state.messagesRef.child(channelId).on("child_added", snap => {
      loadedMessages.push(snap.val());
      console.log(loadedMessages);
      this.setState({
        messages: loadedMessages,
        messgaesLoading: false
      });
    });
  };

  diplayMessages = messages =>
    messages.length > 0 &&
    messages.map(message => (
      <DisplayMessages
        key={message.timestamp}
        message={message}
        user={this.state.user}
      />
    ));

  render() {
    const { messagesRef, channel, user, messages } = this.state;
    return (
      <React.Fragment>
        <MessagesHeader />

        <Segment>
          <Comment.Group className="messages">
            {/* {this.diplayMessages(messages)} */}
          </Comment.Group>
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
