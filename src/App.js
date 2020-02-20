import React, { Component } from "react";
import logo from './logo.svg';
import { 
  Button, 
  Container, 
  Header, 
  Menu, 
  Segment, 
  Image,
  Grid,
} from "semantic-ui-react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* main landing page */}
        <Segment vertical textAlign="left">
          <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Segment vertical textAlign="left">
                  <Container as="nav">
                    {/* TODO: fix image embedding in header */}
                    <Header as="h2">
                      <Image circular src='/public/tower.png'/>
                      The Signal
                    </Header>
                  </Container>
                  <Container className="content">
                    <Header inverted as="h1">
                      The Anti-Resume Project
                    </Header>
                      <p >
                        The goal of this project is to highlight both failures and accomplishments of people at Penn that 
                        wouldn’t normally show up on a resume, and to promote the message that we are more than our resume, 
                        our GPA, our internship, or our job. The Signal is currently sharing anti-resumes of Penn alumni 
                        and students in an effort to promote discussion and reflection on what failure really means.
                      </p>
                    <Button size="huge">submit an anti resume</Button>
                  </Container>
                  
              </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment vertical textAlign="center">
                  
                </Segment> 
              </Grid.Column>
            </Grid.Row>
          </Grid>
          
          {/* TODO: put this at the bottom of the landing page */}
          
        </Segment>
        
        {/* video page */}
        <Segment vertical textAlign="center">

        </Segment>

        {/* roster */}
        {/* TODO:
        - implement grid
        - card contianers
        - scroll effect for different card container roster components */
        }
        <Segment vertical textAlign="center">

        </Segment>
        
        {/* footer */}
        <Segment vertical as="footer" textAlign="center">
            Made with ♡ in Philadelphia by{" "}
            <a href="https://thesign.al">
              The Signal
            </a>
            .
        </Segment>
      </div>
    );
  }
}

export default App;