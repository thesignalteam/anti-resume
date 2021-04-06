import React from "react";
import { Card, Button, Image, Segment, Header, Grid } from 'semantic-ui-react'
import StarIcon from '@material-ui/icons/Star';


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
          src='https://anti-resume-photos.s3.us-east-2.amazonaws.com/2018-07-18%2006.02.42%202%20-%20Benjamin%20Oh.jpg'
          margin="60px"
          circular
        />
        <Header className="name" as="h3">Benjamin Oh</Header>
        {/* <Card.Meta className="year">2019</Card.Meta> */}
        <Card.Meta className="year"></Card.Meta>
      </Segment>

      <Segment basic>

        <Grid columns={2} relaxed>
          <Grid.Row class="row">
            <Grid.Column width={2} >
              <Header className="number" as="h4" color="blue">5</Header>
            </Grid.Column>
            <Grid.Column width={12} textAlign="left">
              <Header className="category" as="h4" color="blue">Clubs That Weren't a Good Fit</Header>
            </Grid.Column>
          </Grid.Row>


          <Grid.Row>
            <Grid.Column width={2}>
              <Header className="number" as="h4" color="blue">4</Header>
            </Grid.Column>
            <Grid.Column width={12} textAlign="left">
              <Header className="category" as="h4" color="blue">Leaps of Faith</Header>
            </Grid.Column>
          </Grid.Row>


          <Grid.Row>
            <Grid.Column width={2}>

            </Grid.Column>
            <Grid.Column width={12} textAlign="left" >
              <Header className="description">Declaring a gap year and leaving the country</Header>
            </Grid.Column>
          </Grid.Row>

        </Grid>


      </Segment>
      <Button className="read_more" basic color='blue' size='large' href="http://www.antiresume.org/resume/2019/54">
        READ MORE
        </Button>
    </Card.Content>

  </Card>


}


export default Top_tile;
