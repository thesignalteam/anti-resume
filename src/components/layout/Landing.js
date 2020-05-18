import React, { Component } from "react";
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
import "../../App.css";
import Top_tile from "../Top_tile";
import Scrolling_tile from "../Scrolling_tile";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import NavBar from "./NavBar";


class Landing extends Component {
  render() {
    return (
      <div className="App">

      {/* main landing page */}
      <Segment vertical textAlign="left" id="top-section">
        <Grid divided='vertically' id="main-grid">
          <Grid.Row stackable columns={2}>
            {/* <NavBar/> */}
            <Grid.Column mobile={16} tablet={16} computer={8} className="left-column">
              <Segment vertical textAlign="left" className="segment-content">

                <Container className="container-content">
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
            <Grid.Column mobile={16} tablet={16} computer={8} className="right-column">
              <Segment vertical textAlign="center" className="tile-segment">

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

        <iframe className="video-screen" width="560" height="315" style={{border:"none", overflow:"hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fjointhesignal%2Fvideos%2F2073803059583829%2F&show_text=0&width=560" ></iframe>


        <p>In Spring 2019, we interviewed a dozen graduating seniors on their failures at Penn.</p>

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


      <CarouselProvider className="carousel-container"
        naturalSlideWidth={100}
        naturalSlideHeight={80}
        totalSlides={6}
        visibleSlides={4}
        infinite="true">
        <div className="carousel-header">
          <h4 className="classYear">2020</h4>
          <p>See All</p>
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

      <CarouselProvider className="carousel-container-mobile"
        naturalSlideWidth={100}
        naturalSlideHeight={80}
        totalSlides={6}
        visibleSlides={1}
        infinite="true">
        <div className="carousel-header">
          <h4 className="classYear">2020</h4>
        </div>
        <Slider className="slider_test">
          <Slide className="slider-card" index={0}><Scrolling_tile /></Slide>
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

      <CarouselProvider className="carousel-container"
        naturalSlideWidth={100}
        naturalSlideHeight={80}
        totalSlides={6}
        visibleSlides={4}
        infinite="true">
        <div className="carousel-header">
          <h4 className="classYear">2019</h4>
          <p>See All</p>
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

      <CarouselProvider className="carousel-container-mobile"
        naturalSlideWidth={100}
        naturalSlideHeight={80}
        totalSlides={6}
        visibleSlides={1}
        infinite="true">
        <div className="carousel-header">
          <h4 className="classYear">2019</h4>
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
      <Segment basic id="footer-seg" vertical as="footer" textAlign="center">
        <div className="footer-text">
          Made with ♡ in Philadelphia by  {" "}
          <a className="footer-p" href="https://thesign.al">
          The Signal </a>
          .
          </div>


      </Segment>


      </div>
    );
  }
}

export default Landing;
