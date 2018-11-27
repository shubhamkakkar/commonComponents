import React, { Component } from "react";
import { Route } from "react-router-dom";

import RoutesPublic from "./routerConfig/Routes_Public";
import Navbar from "./Containers/Navbar";
import FooterComponent from "./Components/Footer";

import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Navbar />
        <div>
          {RoutesPublic.map(route => (
            <Route
              exact
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </div>
        {/* <div>
          {routesPrivate.map(route => (
            <Route
              exact
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
          // settup private routes in /routerConfig/Routes_Private.js
        </div> */}
        <FooterComponent />
      </Container>
    );
  }
}

export default App;
