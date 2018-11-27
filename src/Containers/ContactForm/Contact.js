import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import mapStateToProps from "../mapStateToProps";

import { config } from "../../firebaseConfig";

import {
  Grid,
  Form,
  Button,
  Image,
  Input,
  Label,
  Message,
  Confirm,
  Header
} from "semantic-ui-react";

class FeedBackForm extends Component {
  state = {
    value: ["", "", "", ""],
    FormErr: "",
    submitButtonDisableBool: true,
    show: false
  };

  axiosPostFeedBack = () => {
    const { value } = this.state;

    const feedback = {
      name: value[0],
      email: value[1],
      subject: value[2],
      message: value[3]
    };

    axios
      .post(
        `${config.databaseURL}/users/feedback/${feedback.name}_${
          feedback.email
        }.json`,
        feedback
      )
      .then(() => {
        this.setState({ submittedAlert: true });
        // ex->  this.props.history.push("/dashboard");
      })
      .catch(er => console.log(er));
  };

  onSubmit = () => {
    const { value } = this.state;
    if (
      value[0].trim().length &&
      value[1].trim().length &&
      value[2].trim().length &&
      value[3].trim().length
    ) {
      this.setState({ FormErr: "" });
      this.axiosPostFeedBack();
    } else {
      this.setState({ FormErr: "Fill all the fields" });
    }
  };

  handleConfirm = () => {
    this.onSubmit();
    this.setState({ show: false });
  };
  handleCancel = () => this.setState({ show: false });

  handleChange = (index, e) => {
    if (e.target.value.trim().length) {
      this.setState({
        value: { ...this.state.value, [index]: e.target.value }
      });
    } else {
      this.setState({
        value: { ...this.state.value, [index]: "" },
        submitButtonDisableBool: true
      });
    }
  };
  handleRef = c => {
    this.inputRef = c;
  };

  focus = () => {
    this.inputRef.focus();
  };
  NameEmailSubjectMessage = () =>
    ["Name", "Email", "Subject", "Message"].map((res, index) => (
      <Grid.Column key={index}>
        <Form.Group widths="equal">
          <Form.Field>
            <Label basic pointing="below" color="blue">
              {res}
            </Label>
            <Input
              ref={this.handleRef}
              focus
              onChange={e => this.handleChange(index, e)}
            />
          </Form.Field>
        </Form.Group>
      </Grid.Column>
    ));

  FormRender = () => (
    <Form error>
      <Grid
        container
        stackable
        relaxed
        textAlign="left"
        style={{
          padding: "2.35mm"
        }}
      >
        <Grid.Row columns={1}>{this.NameEmailSubjectMessage()}</Grid.Row>
        <Grid.Row columns={1} style={{ textAlign: "center", display: "block" }}>
          <Button
            color="teal"
            circular
            onClick={() => this.setState({ show: true })}
          >
            Submit
          </Button>
          <Confirm
            open={this.state.show}
            content="Once Your Data is submitted you will be redirected back to your Dashboard(example)"
            onCancel={this.handleCancel}
            onConfirm={this.handleConfirm}
          />
          {this.state.FormErr.trim().length ? (
            <Message
              error
              header="Action Forbidden"
              content={this.state.FormErr}
            />
          ) : null}
        </Grid.Row>
      </Grid>
    </Form>
  );

  render() {
    return (
      <Grid
        stackable
        textAlign="center"
        relaxed
        container
        style={{
          borderRadius: "20px",
          boxShadow: "1px 1px 40px #ccc",
          margin: "6.25mm"
        }}
      >
        <Grid.Row columns={1} style={{ marginBottom: "20px" }}>
          <Grid.Column style={{ padding: "10px" }}>
            <Header color="blue">Contact Us</Header>
          </Grid.Column>
          <Grid.Column style={{ marginBottom: "10px" }}>
            <p>
              Feel like contacting us? Submit your queries here and we will get
              back to you as soon as possible
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image
              src="https://cdn.dribbble.com/users/13754/screenshots/3940032/contact_management.png"
              alt="some image"
            />
          </Grid.Column>
          <Grid.Column>{this.FormRender()}</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(FeedBackForm)
);
