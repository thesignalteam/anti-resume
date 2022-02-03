import React from "react";
import { Card, Button, Image, Segment, Header, Grid } from 'semantic-ui-react'
import StarIcon from '@material-ui/icons/Star';
import 'pure-react-carousel/dist/react-carousel.es.css';

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
      <Card.Meta className="featured" textAlign="right">
        <StarIcon />
          FEATURED
          </Card.Meta>

      <Segment basic>
        <Image
          // floated='center'
          size='tiny'
          src='https://anti-resume-photos.s3.us-east-2.amazonaws.com/Screen%20Shot%202021-03-23%20at%201.20.19%20PM.png'
          margin="60px"
          circular
        />
        <Header className="name" as="h3">Jamie-Lee Josselyn</Header>
        {/* <Card.Meta className="year">2019</Card.Meta> */}
        <Card.Meta className="year">Associate Director & Instructor - Center for Programs in Contemporary Writing </Card.Meta>
      </Segment>

      <Segment basic>

        <Grid columns={2} relaxed>
          <Grid.Row class="row">
            <Grid.Column width={2} >
              <Header className="number" as="h4" color="blue">7</Header>
            </Grid.Column>
            <Grid.Column width={12} textAlign="left">
              <Header className="category" as="h4" color="blue">Pieces of Advice You Would Give to Your Undergraduate Self</Header>
            </Grid.Column>
          </Grid.Row>


          <Grid.Row>
            <Grid.Column width={2}>
              <Header className="number" as="h4" color="blue">5</Header>
            </Grid.Column>
            <Grid.Column width={12} textAlign="left">
              <Header className="category" as="h4" color="blue">Things I'm Proud of That You Won't See on a Resume</Header>
            </Grid.Column>
          </Grid.Row>


          <Grid.Row>
            <Grid.Column width={2}>

            </Grid.Column>
            <Grid.Column width={12} textAlign="left" >
              <Header className="description">How many push-ups I can do</Header>
            </Grid.Column>
          </Grid.Row>

        </Grid>


      </Segment>
      <Button className="read_more" basic color='blue' size='large' href="http://www.antiresume.org/resume/Center%20for%20Programs%20in%20Contemporary%20Writing/62">
        READ MORE
        </Button>
    </Card.Content>

  </Card>


}


export default Top_tile;
