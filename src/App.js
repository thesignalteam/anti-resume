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
  Icon,
  Card
} from "semantic-ui-react";
import "./App.css";
import Top_tile from "./Components/Top_tile";
import Scrolling_tile from "./Components/Scrolling_tile";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import NavBar from "./Components/NavBar";


class App extends Component {
  render() {
    return (
      <div className="App">

      {/* main landing page */}
      <Segment vertical textAlign="left" id="top-section">
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <NavBar/>
            <Grid.Column>
              <Segment vertical textAlign="left">
                {/* <Container as="nav">
                  TODO: fix image embedding in header
                  <Header as="h2">
                    <Image circular src='./tower.png'/>
                    The Signal
                  </Header>
                  <NavBar/>
                </Container>*/}

                <Container className="content">
                  <Header className="main-header" inverted as="h1">
                    The Anti-Resume Project
                  </Header>
                    <p className="main-content">
                      The goal of this project is to highlight both failures and accomplishments of people at Penn that
                      wouldn’t normally show up on a resume, and to promote the message that we are more than our resume,
                      our GPA, our internship, or our job. The Signal is currently sharing anti-resumes of Penn alumni
                      and students in an effort to promote discussion and reflection on what failure really means.
                    </p>
                  <Button id="submit-button" size="huge">SUBMIT AN ANTI-RESUME<Icon name='arrow right' /></Button>
                </Container>

            </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment vertical textAlign="center">

              <Top_tile/>

              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {/* TODO: put this at the bottom of the landing page */}

      </Segment>

      {/* video page */}
      <Segment id="video" vertical textAlign="center">
        <Container className="video-content">
        <Header as="h2">More About the Project </Header>

        <iframe width="560" height="315" style={{border:"none", overflow:"hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fjointhesignal%2Fvideos%2F2073803059583829%2F&show_text=0&width=560" ></iframe>


        <p>This is the video caption. </p>
        </Container>



      </Segment>

      {/* roster */}
      {/* TODO:
      - implement grid
      - card contianers
      - scroll effect for different card container roster components */
      }

      <Segment vertical textAlign="center" id="carousel">

      <Segment basic padded id="scroll_section">
      <Button className="top_button">SENIORS</Button>
      <Button className="top_button">ALUMNI</Button>
      <Button className="top_button">PROFESSORS</Button>
      </Segment>

      {/*First carousel*/}

      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={80}
        totalSlides={6}
        visibleSlides={4}
        infinite="true">
        <div>
          <h4 className="classYear">2020</h4>
          <p className="seeAll">See All</p>
        </div>
        <Slider className="slider_test">
          <Slide index={0}><Scrolling_tile /></Slide>
          <Slide index={1}><Scrolling_tile /></Slide>
          <Slide index={2}><Scrolling_tile /></Slide>
          <Slide index={3}><Scrolling_tile /></Slide>
          <Slide index={4}><Scrolling_tile /></Slide>
          <Slide index={5}><Scrolling_tile /></Slide>
        </Slider>
        <ButtonNext className="buttonPanel" icon>
          <Icon name='arrow right' />
        </ButtonNext>
      </CarouselProvider>

      {/*Second carousel*/}

      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={80}
        totalSlides={6}
        visibleSlides={4}
        infinite="true">
        <div>
          <h4 className="classYear">2019</h4>
          <p className="seeAll">See All</p>
        </div>
        <Slider className="slider_test">
          <Slide index={0}><Scrolling_tile /></Slide>
          <Slide index={1}><Scrolling_tile /></Slide>
          <Slide index={2}><Scrolling_tile /></Slide>
          <Slide index={3}><Scrolling_tile /></Slide>
          <Slide index={4}><Scrolling_tile /></Slide>
          <Slide index={5}><Scrolling_tile /></Slide>
        </Slider>

        <ButtonNext className="buttonPanel" icon>
          <Icon name='arrow right' />
        </ButtonNext>

      </CarouselProvider>

      </Segment>

      {/* footer */}
      <Segment id="footer-seg" vertical as="footer" textAlign="center">
        <div class="footer-text">
          Made with ♡ in Philadelphia by{" "}
          <a href="https://thesign.al">
            The Signal
          </a>
          </div>
          .
      </Segment>


      </div>
    );
  }
}

export default App;
