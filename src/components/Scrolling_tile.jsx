import React from "react";
import { Card, Icon, Button, Image, Divider, Segment, Header, Grid} from 'semantic-ui-react'



function Scrolling_tile() {


    return <Card id="Scrolling_tile" textAlign="center">
      <Card.Content>

        <Segment basic padded className="tile_content">
        <Image
          // floated='center'
          size='tiny'
          src='../tower.png'
          margin="50px"
          circular
        />
        <Header className="name" as="h3">Tiffany Yau</Header>
        <Card.Meta className="year">C '19</Card.Meta>
        </Segment>

      </Card.Content>

    </Card>


}


export default Scrolling_tile;
