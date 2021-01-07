import React, { Component } from "react";
import {
  Button,
  Container,
  Header,
  Segment,
  Grid,
} from "semantic-ui-react";
import "../style/App.css";
import Top_tile from "./TopTile";
import Scrolling_tile from "./Scrolling_tile";
import { CarouselProvider, Slider, Slide, ButtonNext, ButtonBack } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


class Landing extends Component {

  constructor() {
    super();
    this.state = {
      resumes_2020: [],
      resumes_2019: [],
      resumes_alums: [],
      resumes_faculty : [],
      response: '',
      responseToPost: '',
    }
  }

  componentDidMount = () => {
    fetch('/api/getAllResumes/senior/2020')
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(result);
          this.setState({
            resumes_2020: result
          });
        },

        (error) => {
          console.log("error is " + error);
        }
      )

    fetch('/api/getAllResumes/senior/2019')
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(result);
          this.setState({
            resumes_2019: result
          });
        },

        (error) => {
          console.log("error is " + error);
        }
      )

    fetch('/api/getAllResumes/alumni')
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(result);
          this.setState({
            resumes_alums: result
          });
        },

        (error) => {
          console.log("error is " + error);
        }
      )

      fetch('/api/getAllProfessorResumes')
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(result);
          this.setState({
            resumes_faculty: result
          });
        },

        (error) => {
          console.log("error is " + error);
        }
      )
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  renderScrollingTiles = (resumes, buffer) => {
    let gridValues = []
    let index = 0;
    if (Array.isArray(resumes)) {
      resumes.forEach((i) => {
        gridValues.push(this.createResumeCard(i, buffer + gridValues.length - 1, index))
        index++
      })
    } else if (resumes.length == 1) {
      gridValues.push(this.createResumeCard(resumes, buffer, index))
    }

    return gridValues
  }

  createResumeCard = (resume, key, index) => {
    return (
      <Slide className="slider-card" index={index}>
        <Scrolling_tile name={resume.name}
          classT={resume.class ? resume.class : resume.department }
          index={key + 1}
          pic={resume.profilePicUrl}
        />
      </Slide>
    )
  }

  render() {
    return (
      <div className="App">

        {/* main landing page */}
        <Segment vertical textAlign="center" id="top-section">
          <Grid divided='vertically' id="main-grid">
            <Grid.Row stackable columns={2}>
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

                    <Button id="submit-button" size="huge" href="https://forms.gle/zeP72nW59jjVVKzDA">SUBMIT YOUR ANTI-RESUME &nbsp; <i class="fas fa-long-arrow-alt-right"></i></Button>
                  </Container>

                </Segment>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={16} computer={8} className="right-column">
                <Segment vertical textAlign="center" className="tile-segment">

                  <Top_tile />

                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Segment>


        <Segment vertical textAlign="center" id="carousel">

          <Segment basic padded id="scroll_section">
            <Button className="top_button" href="/all/#2020">2020</Button>
            <Button className="top_button" href="/all/#2019">2019</Button>
            <Button className="top_button" href="/all/#alumni">ALUMNI</Button>
            <Button className="top_button" href="/all/#faculty">FACULTY</Button>
            {/* <Button className="top_button">PROFESSORS</Button> */}
          </Segment>

          {/*First carousel*/}
          <CarouselProvider className="carousel-container"
            naturalSlideWidth={100}
            naturalSlideHeight={80}
            totalSlides={this.state.resumes_2020.length}
            visibleSlides={4}
            infinite="true">
            <div className="carousel-header" id="2020">
              <h4 className="classYear">2020</h4>
              <p><a href="/all/#2020">See All</a></p>
            </div>
            <Slider className="slider_test">
              {this.renderScrollingTiles(this.state.resumes_2020, 0, "2020")}
            </Slider>
            <ButtonBack className="buttonPanelBack" icon>
              <i class="fas fa-long-arrow-alt-left fa-2x"></i>
            </ButtonBack>
            <ButtonNext className="buttonPanel" icon>
              <i class="fas fa-long-arrow-alt-right fa-2x"></i>
            </ButtonNext>
          </CarouselProvider>

          <CarouselProvider className="carousel-container-mobile"
            naturalSlideWidth={100}
            naturalSlideHeight={80}
            totalSlides={this.state.resumes_2020.length}
            visibleSlides={1}
            infinite="true">
            <div className="carousel-header" id="alumni">
              <h4 className="classYear">2020</h4>
            </div>
            <Slider className="slider_test">
              {this.renderScrollingTiles(this.state.resumes_2020, 0, "2020")}
            </Slider>
            <ButtonNext className="buttonPanel" icon>
              <i class="fas fa-long-arrow-alt-right fa-2x"></i>
            </ButtonNext>
          </CarouselProvider>

          {/*Second Carousel*/}
          <CarouselProvider className="carousel-container"
            naturalSlideWidth={100}
            naturalSlideHeight={80}
            totalSlides={this.state.resumes_2019.length}
            visibleSlides={4}
            infinite={true}>
            <div className="carousel-header" id="2019">
              <h4 className="classYear">2019</h4>
              <p><a href="/all/#2019">See All</a></p>
            </div>
            <Slider className="slider_test">
              {this.renderScrollingTiles(this.state.resumes_2019, this.state.resumes_2020.length, "2019")}
            </Slider>
            <ButtonBack className="buttonPanelBack" icon>
              <i class="fas fa-long-arrow-alt-left fa-2x"></i>
            </ButtonBack>
            <ButtonNext className="buttonPanel" icon>
              <i class="fas fa-long-arrow-alt-right fa-2x"></i>
            </ButtonNext>
          </CarouselProvider>

          <CarouselProvider className="carousel-container-mobile"
            naturalSlideWidth={100}
            naturalSlideHeight={80}
            totalSlides={this.state.resumes_2019.length}
            visibleSlides={1}
            infinite="true">
            <div className="carousel-header">
              <h4 className="classYear">2019</h4>
            </div>
            <Slider className="slider_test">
              {this.renderScrollingTiles(this.state.resumes_2019, this.state.resumes_2020.length,  "2019")}
            </Slider>
            <ButtonBack className="buttonPanelBack" icon>
              <i class="fas fa-long-arrow-alt-left fa-2x"></i>
            </ButtonBack>
            <ButtonNext className="buttonPanel" icon>
              <i class="fas fa-long-arrow-alt-right fa-2x"></i>
            </ButtonNext>
          </CarouselProvider>

          {/*Third Carousel*/}
          <CarouselProvider className="carousel-container"
            naturalSlideWidth={100}
            naturalSlideHeight={80}
            totalSlides={this.state.resumes_alums.length}
            visibleSlides={4}
            infinite="true">
            <div className="carousel-header" id="alumni">
              <h4 className="classYear">ALUMNI</h4>
              <p><a href="/all/#alumni">See All</a></p>
            </div>
            <Slider className="slider_test">
              {this.renderScrollingTiles(this.state.resumes_alums, this.state.resumes_2020.length + this.state.resumes_2019.length, "alumni")}
            </Slider>
            <ButtonBack className="buttonPanelBack" icon>
              <i class="fas fa-long-arrow-alt-left fa-2x"></i>
            </ButtonBack>
            <ButtonNext className="buttonPanel" icon>
             <i class="fas fa-long-arrow-alt-right fa-2x"></i>
            </ButtonNext>
          </CarouselProvider>

          <CarouselProvider className="carousel-container-mobile"
            naturalSlideWidth={100}
            naturalSlideHeight={80}
            totalSlides={this.state.resumes_alums.length}
            visibleSlides={1}
            infinite="true">
            <div className="carousel-header" id="alumni">
              <h4 className="classYear">ALUMNI</h4>
            </div>
            <Slider className="slider_test">
              {this.renderScrollingTiles(this.state.resumes_alums, this.state.resumes_2020.length + this.state.resumes_2019.length, "alumni")}
            </Slider>

            <ButtonNext className="buttonPanel" icon>
             <i class="fas fa-long-arrow-alt-right fa-2x"></i>
            </ButtonNext>
          </CarouselProvider>

           {/*Fourth Carousel*/}
           <CarouselProvider className="carousel-container"
            naturalSlideWidth={100}
            naturalSlideHeight={80}
            totalSlides={this.state.resumes_faculty.length}
            visibleSlides={4}
            infinite="true">
            <div className="carousel-header" id="2019">
              <h4 className="classYear">FACULTY</h4>
              <p><a href="/all/#faculty">See All</a></p>
            </div>
            <Slider className="slider_test">
              {this.renderScrollingTiles(this.state.resumes_faculty, this.state.resumes_alums.length + this.state.resumes_2020.length + this.state.resumes_2019.length, "faculty")}
            </Slider>
            <ButtonBack className="buttonPanelBack" icon>
              <i class="fas fa-long-arrow-alt-left fa-2x"></i>
            </ButtonBack>
            <ButtonNext className="buttonPanel" icon>
              <i class="fas fa-long-arrow-alt-right fa-2x"></i>
            </ButtonNext>
          </CarouselProvider>

          <CarouselProvider className="carousel-container-mobile"
            naturalSlideWidth={100}
            naturalSlideHeight={80}
            totalSlides={this.state.resumes_faculty.length}
            visibleSlides={1}
            infinite="true">
            <div className="carousel-header">
              FACULTY
            </div>
            <Slider className="slider_test">
            {this.renderScrollingTiles(this.state.resumes_faculty, this.state.resumes_alums.length + this.state.resumes_2020.length + this.state.resumes_2019.length, "faculty")}
            </Slider>
            <ButtonNext className="buttonPanel" icon>
              <i class="fas fa-long-arrow-alt-right fa-2x"></i>
            </ButtonNext>
          </CarouselProvider>

        </Segment>

      </div>
    );
  }
}

export default Landing;
