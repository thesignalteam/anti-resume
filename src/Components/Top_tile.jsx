import React from "react";
import { Card, Icon, Button, Image, Divider, Segment, Header, Grid} from 'semantic-ui-react'


// const extra = (
//   <a>
//     <Icon name='user' />
//     16 Friends
//   </a>
// )
//
// const topTile = () => (

function Top_tile() {
  // return <Card>
  //   image='/images/avatar/large/elliot.jpg'
  //   header='Tiffany Yau'
  //   meta="C '19"
  //   description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.' />
  //   <Button>Hi</Button>
  //   </Card>

    return <Card id="top_tile" >
      <Card.Content>
        <Card.Meta className="featured" textAlign="left"><i class="fa fa-star" aria-hidden="true"></i>
          FEATURED</Card.Meta>

        <Segment basic>
        <Image
          // floated='center'
          size='tiny'
          src='../tower.png'
          margin="50px"
          circular
        />
        <Header className="name"as="h3">Tiffany Yau</Header>
        <Card.Meta className="year">C '19</Card.Meta>
        </Segment>

        <Segment basic>

        <Grid columns={2} relaxed >
          <Grid.Row class="row">
            <Grid.Column width={2} >
              <Header className="number" as="h4" color="blue">50+</Header>
            </Grid.Column>
            <Grid.Column width={12} textAlign="left">
              <Header className="category" as="h4" color="blue">"Thank you for applying but..." jobs</Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={2}>
              <Header className="number" as="h4" color="blue">1</Header>
            </Grid.Column>
            <Grid.Column width={12} textAlign="left">
              <Header className="category" as="h4" color="blue">Leap of Faith</Header>
              </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={2}>

            </Grid.Column>
            <Grid.Column width={12} textAlign="left" >
              <Header as="h5" className="description">Working full time on my company instead of going with the traditional route of most Penn students</Header>
            </Grid.Column>
          </Grid.Row>

        </Grid>


        </Segment>
        <Button className="read_more" basic color='blue' size='large'>
          READ MORE
        </Button>
      </Card.Content>

    </Card>


}


export default Top_tile;
