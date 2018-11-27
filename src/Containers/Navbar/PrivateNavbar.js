import React from "react";
import { withRouter } from "react-router-dom";

import { Menu } from "semantic-ui-react";

const MenuItemObj = [
  {
    path: "/Dashboard",
    name: "Dashboard"
  }
  //   create private routes in routerConfig/privateRoutes and reference them here
];

const PrivateNavbar = props => (
  <Menu>
    {MenuItemObj.map(res => (
      <Menu.Item
        content={res.name}
        onClick={() => props.history.push(res.path)}
      />
    ))}
  </Menu>
);

export default withRouter(PrivateNavbar);
