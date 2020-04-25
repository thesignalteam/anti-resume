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

    return <Card>
      <Card.Content>
        <Card.Meta textAlign="left"><i class="fa fa-star" aria-hidden="true"></i>
          FEATURED</Card.Meta>

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

        <Segment basic>

        <Grid columns={2} relaxed >
          <Grid.Row>
            <Grid.Column width={2} >
              <Header as="h4" color="blue">50+</Header>
            </Grid.Column>
            <Grid.Column width={12} textAlign="left">
              <Header as="h4" color="blue">"Thank you for applying but..."" jobs</Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={2}>
              <Header as="h4" color="blue">1</Header>
            </Grid.Column>
            <Grid.Column width={12} textAlign="left">
              <Header as="h4" color="blue">Leap of Faith</Header>
              </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={2}>

            </Grid.Column>
            <Grid.Column width={12} textAlign="left">
              <Header as="h5">Working full time on my company instead of going with the traditional route of most Penn students</Header>
            </Grid.Column>
          </Grid.Row>

        </Grid>


        </Segment>
        <Button basic color='blue' size='large'>
          READ MORE
        </Button>
      </Card.Content>

    </Card>


}


export default Top_tile;
