import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

import routes from "./routerConfig/Routes_Public";
import Navbar from "./Containers/Navbar";

import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Navbar />
        <div>
          {routes.map(route => (
            <Route
              exact
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </div>
      </Container>
    );
  }
}

export default App;
