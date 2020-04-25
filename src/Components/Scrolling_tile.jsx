import React from "react";
import { Card, Icon, Button, Image, Divider, Segment, Header, Grid} from 'semantic-ui-react'



function Scrolling_tile() {


    return <Card textAlign="center">
      <Card.Content>

        <Segment basic padded>
        <Image
          // floated='center'
          size='tiny'
          src='../tower.png'
          margin="50px"
          circular
        />
        <Header as="h3">Tiffany Yau</Header>
        <Card.Meta>C '19</Card.Meta>
        </Segment>

      </Card.Content>

    </Card>


}


export default Scrolling_tile;
