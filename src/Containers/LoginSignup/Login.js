import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import mapStateToProps from "../mapStateToProps";
import { User_Establish } from "../../actions";

import fire from "../../firebaseConfig";

import { Grid, Form, Button, Message } from "semantic-ui-react";

class Login extends Component {
  state = {
    value: ["", "", ""],
    submitButtonBool: true,
    LoginFormErrorBool: false,
    msgErr: "",
    toEventRegister: false,
    user: {}
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
              this.state.value[2].length
            ) {
              this.setState({
                submitButtonBool: false,
                LoginFormErrorBool: false,
                msgErr: ""
              });
            } else {
              this.setState({
                submitButtonBool: true,
                LoginFormErrorBool: true,
                msgErr: "Fill in all the fields"
              });
            }
          }
        );
      } else {
        this.setState({
          value: { ...this.state.value, [index]: "" },
          submitButtonBool: true,
          LoginFormErrorBool: true,
          msgErr: "Fill in all the fields"
        });
      }
    };
    const Login = e => {
      e.preventDefault();

      const { value } = this.state;

      const signInCredentials = {
        name: value[0],
        email: value[1],
        password: value[2]
      };

      fire
        .auth()
        .signInWithEmailAndPassword(
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
            //ex-> this.props.history.push("/dashboard");
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
          <Grid.Row>
            <Grid.Column>
              {this.state.LoginFormErrorBool ? (
                <Message error content={this.state.msgError} />
              ) : null}
              <Button
                content="Login"
                color="teal"
                circular
                onClick={Login}
                disabled={this.state.submitButtonBool}
                style={{ boxShadow: "1px 2px 10px teal" }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }

  render() {
    const Login = this.renderHelper();
    return <div>{Login}</div>;
  }
}

export default connect(
  mapStateToProps,
  { User_Establish }
)(withRouter(Login));
