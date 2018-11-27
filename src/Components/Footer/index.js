import React from "react";
import { Segment, Header, Message } from "semantic-ui-react";

const FooterComp = () => (
  <Segment>
    <Message primary>
      Non of the obove components are working as the firebaseConfiguration hasnt
      been done, though you would be able to see the validation errors in forms
      connect to firebase to and intrigate in your project
    </Message>
    <Message error>
      Dont use in commercial products as the images are taken from dribble might
      cause lawsuit
    </Message>
    <Message success>
      Completely fine to be used for learning and educational services
    </Message>
    <Header>All Rights reserved to Shubham Kakkar</Header>
  </Segment>
);

export default FooterComp;
