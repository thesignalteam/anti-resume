import React from "react";
import { Card, Icon, Button, Image, Divider, Segment, Header, Grid} from 'semantic-ui-react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LinkIcon from '@material-ui/icons/Link';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


function ResumePage() {


    return  <div className="App" id="resume">

    <Segment className="section top">
      <img className="background" src="../background.jpg" alt="background"/>

      <img className="icon" src="../tower.png"/>
      <Header className="name"as="h3">Tiffany Yau</Header>
      <p className="year">C '19</p>
      <p class="description">Michelle concentrates in Statistics and minors in Data Science and Computer
          Science. After graduation, she will be working in Operations at Google.</p>
      <div className="icons">
      <LinkIcon className="resume-icons"/>
      <LinkedInIcon className="resume-icons"/>
      <MailOutlineIcon className="resume-icons"/>
      </div>
    </Segment>

    <Segment className="section middle">

      <div class="ui medium header category-head">L's Taken</div>

        <Grid columns={2} relaxed>
          <Grid.Row class="row">
            <Grid.Column width={2} >
              <Header className="number" color="blue">50+</Header>
            </Grid.Column>
            <Grid.Column width={10} textAlign="left">
              <Header className="category" as="h4" color="blue">"Thank you for applying but..." jobs</Header>
            </Grid.Column>
          </Grid.Row>

          <hr className="divider"/>

          <Grid.Row>
            <Grid.Column width={2}>
              <Header className="number"  color="blue">1</Header>
            </Grid.Column>
            <Grid.Column width={12} textAlign="left">
              <Header className="category"  color="blue">Leap of Faith</Header>
              <p className="content" >Working full time on my company instead of going with the traditional route of most Penn students</p>
              </Grid.Column>
          </Grid.Row>

          <hr className="divider"/>

          <Grid.Row>
            <Grid.Column width={2}>
              <Header className="number" as="h4" color="blue">1</Header>
            </Grid.Column>
            <Grid.Column width={12} textAlign="left">
              <Header className="category" as="h4" color="blue">Leap of Faith</Header>
              <p className="content" >Working full time on my company instead of going with the traditional route of most Penn students</p>
              </Grid.Column>
          </Grid.Row>

        </Grid>

    </Segment>

    <Segment className="section">
    <div class="ui medium header category-head">On the Bright Side</div>

      <Grid columns={2} relaxed>
        <Grid.Row class="row">
          <Grid.Column width={2} >
            <Header className="number" color="blue">50+</Header>
          </Grid.Column>
          <Grid.Column width={10} textAlign="left">
            <Header className="category" as="h4" color="blue">"Thank you for applying but..." jobs</Header>
          </Grid.Column>
        </Grid.Row>

        <hr className="divider"/>

        <Grid.Row>
          <Grid.Column width={2}>
            <Header className="number"  color="blue">1</Header>
          </Grid.Column>
          <Grid.Column width={12} textAlign="left">
            <Header className="category"  color="blue">Leap of Faith</Header>
            <p className="content" >Working full time on my company instead of going with the traditional route of most Penn students</p>
            </Grid.Column>
        </Grid.Row>

        <hr className="divider"/>

        <Grid.Row>
          <Grid.Column width={2}>
            <Header className="number" as="h4" color="blue">2</Header>
          </Grid.Column>
          <Grid.Column width={12} textAlign="left">
            <Header className="category" as="h4" color="blue">Memories Made While I Wasn't Studying/Working</Header>
            <ul>
            <li className="bullet"><p className="content" >Working full time on my company instead of going with the traditional route of most Penn students</p></li>
            <li className="bullet"><p className="content" >Golfing for Penn</p></li>

            </ul>
            </Grid.Column>
        </Grid.Row>

      </Grid>
    </Segment>
    </div>


}


export default ResumePage;
