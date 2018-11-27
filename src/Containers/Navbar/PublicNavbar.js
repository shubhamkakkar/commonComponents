import React from "react";
import { Container, Menu } from "semantic-ui-react";

import { withRouter } from "react-router-dom";
const MenuItemObj = [
  {
    path: "/aboutus",
    name: "About Us"
  },
  {
    path: "/loginsignup",
    name: "Login Signup"
  },
  {
    path: "/contactus",
    name: "Contact"
  }
];

const PublicNavbar = props => (
  <Menu>
    {MenuItemObj.map(res => (
      <Menu.Item
        content={res.name}
        onClick={() => props.history.push(res.path)}
      />
    ))}
  </Menu>
);

export default withRouter(PublicNavbar);
