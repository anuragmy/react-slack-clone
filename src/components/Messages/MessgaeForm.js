import React, { Component } from "react";
import { Segment, Button, Input } from "semantic-ui-react";

class MessgaeForm extends Component {
  render() {
    return (
      <Segment className="message__form">
        <Input
          fluid
          name="message"
          placeholder="Write your message"
          style={{ marginBottom: "0.7em" }}
          label={<Button icon={"add"} />}
          labelPosition="left"
        />
        <Button.Group icon widths="2">
          <Button
            color="green"
            content="Add Reply"
            labelPosition="left"
            icon="edit"
          />
          <Button
            color="teal"
            content="Upload Media"
            labelPosition="right"
            icon="cloud upload"
          />
        </Button.Group>
      </Segment>
    );
  }
}

export default MessgaeForm;
