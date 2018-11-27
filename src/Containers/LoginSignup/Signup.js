import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { User_Establish } from "../../actions";

import mapStateToProps from "../mapStateToProps";

import fire from "../../firebaseConfig";

import { Form, Grid, Button, Message } from "semantic-ui-react";

class Signup extends Component {
  state = {
    value: ["", "", "", ""],
    submitButtonBool: true,
    LoginFormErrorBool: false,
    msgError: "",
    userUID: ""
  };

  renderHelper() {
    const userInfo = [
      {
        label: "Name",
        placeholder: "Name",
        type: "text"
      },
      {
        label: "Email",
        placeholder: "abc@xyz.com",
        type: "email"
      },
      {
        label: "Password",
        placeholder: "Password",
        type: "password"
      },
      {
        label: "Confirm Password",
        placeholder: "Confirm Password",
        type: "password"
      }
    ];
    const handleChange = (index, e) => {
      if (e.target.value.trim().length) {
        this.setState(
          {
            value: { ...this.state.value, [index]: e.target.value }
          },
          () => {
            if (
              this.state.value[0].length &&
              this.state.value[1].length &&
              this.state.value[2].length &&
              this.state.value[3].length
            ) {
              if (this.state.value[2] === this.state.value[3]) {
                this.setState({
                  submitButtonBool: false,
                  LoginFormErrorBool: false,
                  msgError: ""
                });
              } else {
                this.setState({
                  submitButtonBool: true,
                  LoginFormErrorBool: true,
                  msgError: "Passwords Didnot Match"
                });
              }
            } else {
              this.setState({
                submitButtonBool: true,
                LoginFormErrorBool: false,
                msgError: "Fill in the requried fields"
              });
            }
          }
        );
      } else {
        this.setState({
          value: { ...this.state.value, [index]: "" },
          submitButtonBool: true,
          LoginFormErrorBool: false
        });
      }
    };

    const signUp = e => {
      const { value } = this.state;
      const signInCredentials = {
        email: value[1],
        password: value[2]
      };
      e.preventDefault();
      fire
        .auth()
        .createUserWithEmailAndPassword(
          signInCredentials.email,
          signInCredentials.password
        )
        .then(user => {
          if (user) {
            this.props.User_Establish(
              user.user.uid,
              signInCredentials.name,
              signInCredentials.email
            );
            // ex ->  this.props.history.push("/dashboard");
          }
        })
        .catch(err => {
          this.setState({
            LoginFormErrorBool: true,
            msgError: err.message
          });
        });
    };

    return (
      <Form error>
        <Grid
          textAlign="left"
          stackable
          columns={1}
          style={{ padding: "0 10px" }}
        >
          {userInfo.map((res, index) => {
            return (
              <Grid.Column key={index}>
                <Form.Group widths="equal">
                  <Form.Input
                    required
                    label={res.label}
                    placeholder={res.placeholder}
                    onChange={e => handleChange(index, e)}
                    type={res.type}
                  />
                </Form.Group>
              </Grid.Column>
            );
          })}
          <Grid.Column>
            {this.state.LoginFormErrorBool ? (
              <Message error content={this.state.msgError} />
            ) : null}
            <Button
              content="SignUp"
              color="teal"
              circular
              onClick={signUp}
              disabled={this.state.submitButtonBool}
            />
          </Grid.Column>
        </Grid>
      </Form>
    );
  }

  render() {
    const signup = this.renderHelper();
    return <div>{signup}</div>;
  }
}

export default connect(
  mapStateToProps,
  { User_Establish }
)(withRouter(Signup));
