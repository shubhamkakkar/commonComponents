import React, { Component } from "react";

import Login from "./Login";
import Signup from "./Signup";

import { Container, Grid, Button, Image } from "semantic-ui-react";
class LoginSignup extends Component {
  state = {
    signupBool: false,
    buttonMessage: "Register"
  };

  signupLogin() {
    const loginSignupChange = () => {
      const { signupBool } = this.state;
      if (signupBool) {
        this.setState({ signupBool: false, buttonMessage: "Register" });
      } else {
        this.setState({ signupBool: true, buttonMessage: "Login" });
      }
    };
    return (
      <Grid
        stackable
        columns={2}
        divided
        style={{
          padding: "6.35mm",
          margin: "0 12.55mm",
          backgroundColor: "white",
          textAlign: "center",
          borderRadius: "15px",
          boxShadow: "1px 1px 20px #ccc"
        }}
      >
        <Grid.Column style={{ padding: "20px" }}>
          <Image src="https://cdn.dribbble.com/users/1568450/screenshots/5419750/work_1_dribbble-01.png" />
        </Grid.Column>
        <Grid.Column style={{ padding: "20px" }} id="login-signup">
          {this.state.signupBool ? <Signup /> : <Login />}
          <Grid.Row style={{ textAlign: "right" }}>
            <Button
              content={this.state.buttonMessage}
              color="violet"
              circular
              onClick={loginSignupChange}
            />
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
  render() {
    const signupLogin = this.signupLogin();
    return <Container fluid>{signupLogin}</Container>;
  }
}

export default LoginSignup;
