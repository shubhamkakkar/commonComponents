import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import mapStateToProps from "../mapStateToProps";

import PublicNavbar from "./PublicNavbar";
import PrivateNavbar from "./PrivateNavbar";

class Navbar extends Component {
  render() {
    if (this.props.state.user.user_uid) {
      return <PrivateNavbar />;
    } else {
      return <PublicNavbar />;
    }
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Navbar)
);
