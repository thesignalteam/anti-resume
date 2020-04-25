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
import Top_tile from "./Components/Top_tile";
import Scrolling_tile from "./Components/Scrolling_tile";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


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

                <Top_tile/>

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

        <Segment basic padded>
        <Button>SENIORS</Button>
        <Button>ALUMNI</Button>
        <Button>PROFESSORS</Button>
        </Segment>


        {/*First carousel*/}

        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={80}
        totalSlides={4}
        visibleSlides={3}>
      <Slider>
          <Slide index={0}><Scrolling_tile /></Slide>
          <Slide index={1}><Scrolling_tile /></Slide>
          <Slide index={2}><Scrolling_tile /></Slide>
          <Slide index={3}><Scrolling_tile /></Slide>

        </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>

        {/*Second carousel*/}

        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={80}
        totalSlides={4}
        visibleSlides={3}>
      <Slider>
          <Slide index={0}><Scrolling_tile /></Slide>
          <Slide index={1}><Scrolling_tile /></Slide>
          <Slide index={2}><Scrolling_tile /></Slide>
          <Slide index={3}><Scrolling_tile /></Slide>

        </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>

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
