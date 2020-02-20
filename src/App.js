import React, { Component } from "react";
import logo from './logo.svg';
import { 
  Button, 
  Container, 
  Header, 
  Menu, 
  Segment, 
  Image,
  Grid
} from "semantic-ui-react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Segment inverted vertical textAlign="left">
                <Container as="nav">
                  <Header inverted as="h2">
                    <Image circular src='/public/tower.png'/>
                    Anti-Resume
                  </Header>
                </Container>
                <Container className="content">
                  <Header inverted as="h1">
                    The <b>Anti-Resume</b> Project
                  </Header>
                    <p>
                      The goal of this project is to highlight both failures and accomplishments of people at Penn that 
                      wouldn’t normally show up on a resume, and to promote the message that we are more than our resume, 
                      our GPA, our internship, or our job. The Signal is currently sharing anti-resumes of Penn alumni 
                      and students in an effort to promote discussion and reflection on what failure really means.
                    </p>
                  <Button size="huge">Learn more</Button>
                </Container>
                <Segment inverted vertical as="footer" textAlign="center">
                  Made with ♡ in Philadelphia by{" "}
                  <a href="https://thesign.al">
                    The Signal
                  </a>
                  .
                </Segment>
            </Segment>
            </Grid.Column>
            <Grid.Column>
              <Image src='/images/wireframe/paragraph.png' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
        
      </div>
    );
  }
}

export default App;