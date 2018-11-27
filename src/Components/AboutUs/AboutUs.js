import React from "react";
import { Card, Grid, Image } from "semantic-ui-react";

const AboutUs = () => (
  <Grid stackable relaxed columns={2} container verticalAlign="middle">
    <Grid.Column>
      <Image src="https://cdn.dribbble.com/users/1537480/screenshots/4797235/dribbble-01.jpg" />
    </Grid.Column>
    <Grid.Column verticalAlign="middle">
      <Card
        fluid
        raised
        style={{
          borderRadius: "20px",
          padding: "6.34mm",
          boxShadow: "1px 1px 40px #ccc",
          margin: "6.35mm 0"
        }}
      >
        <Card.Content>
          <Card.Header style={{ color: "teal" }}> About Us </Card.Header>
          <Card.Description>
            Laboris anim consequat deserunt dolore ipsum aliquip excepteur eu
            nisi adipisicing veniam. In sit velit qui deserunt culpa. Ad aliqua
            eiusmod tempor Lorem dolor ea proident eu elit deserunt Lorem tempor
            sint. Veniam cupidatat in minim quis id non fugiat. Quis aute
            nostrud exercitation consectetur elit qui elit cillum ipsum veniam.
            Ut ut duis velit ex voluptate culpa. Ullamco labore eiusmod culpa
            culpa pariatur sint.
          </Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  </Grid>
);

export default AboutUs;
