import React, { Component } from "react";
import { Comment, Segment } from "semantic-ui-react";
import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessgaeForm";

export default class Messgaes extends Component {
  render() {
    return (
      <React.Fragment>
        <MessagesHeader />

        <Segment>
          <Comment.Group className="messages">{/* {Messages} */}</Comment.Group>
        </Segment>
        <MessageForm />
      </React.Fragment>
    );
  }
}
