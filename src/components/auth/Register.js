import React, { Component } from "react";
import "../App.css";
import {
  Icon,
  Message,
  Segment,
  Grid,
  Form,
  Button,
  Header
} from "semantic-ui-react";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="black" textAlign="center">
            <Icon name="slack hash" color="green" />
            Register for Chime
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name="username"
                icon="user"
                iconPosition="left"
                placeholder="Username"
                onChange={this.handleChange}
                type="text"
              />
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email"
                onChange={this.handleChange}
                type="email"
              />
              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                onChange={this.handleChange}
                type="password"
              />
              <Form.Input
                fluid
                name="passwordConfirm"
                icon="repeat"
                iconPosition="left"
                placeholder="Confirm Password"
                onChange={this.handleChange}
                type="password"
              />
              <Button color="green" fluid size="large">
                Submit
              </Button>
              <Message>
                Already a user? <Link to="/login">Login</Link>
              </Message>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Register;
