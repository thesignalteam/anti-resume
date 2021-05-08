import React, { Component } from "react";
import { Segment, Grid } from 'semantic-ui-react';
import "../style/App.css";
import Scrolling_tile from "./Scrolling_tile";
const ip = require("../utils.json")["ip"];

class AllResumes extends Component {

  constructor() {
    super();
    this.state = {
      resumes_2021: [],
      resumes_2020: [],
      resumes_2019: [],
      resumes_alums: [],
      resumes_faculty : [],
      response: '',
      responseToPost: '',
    }
  }

  componentDidMount = () => {

    fetch(`${ip}/api/getAllResumes/senior/2021`)
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(result);
          this.setState({
            resumes_2021: result
          });
        },

        (error) => {
          console.log("error is " + error);
        }
      )

    fetch(`${ip}/api/getAllResumes/senior/2020`)
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

    fetch(`${ip}/api/getAllResumes/senior/2019`)
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

    fetch(`${ip}/api/getAllResumes/alumni`)
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

      fetch(`${ip}/api/getAllProfessorResumes`)
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

  createResumeCard = (resume, key) => {
    return (
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Scrolling_tile name={resume.name}
          classT={resume.class ? resume.class : resume.department }
          index={key + 1}
          pic={resume.profilePicUrl}
        />
      </Grid.Column>
    )
  }

  renderResumes = (resumes, buffer) => {
    let gridValues = []
    if (Array.isArray(resumes)) {
      resumes.forEach((i) => {
        gridValues.push(this.createResumeCard(i, buffer + gridValues.length - 1))
      })
    } else if (resumes.length == 1) {
      gridValues.push(this.createResumeCard(resumes, 0))
    } else {
      return (
        <div>
          <p>none</p>
        </div>

      )
    }
    return gridValues
  }

  render() {
    return (
      <div className="App" id="all_resumes">
        <Segment vertical textAlign="center" className="resume-segment">

          {/* 2021 */}
          <div className="year_header" id="2021">
            <h4 className="classYear">2021</h4>
          </div>
          <Grid columns={5} relaxed>
            {this.renderResumes(this.state.resumes_2021, 0, "2021")}
          </Grid>

          <br></br>
          <br></br>

          {/* 2020 */}
          <div className="year_header" id="2020">
            <h4 className="classYear">2020</h4>
          </div>
          <Grid columns={5} relaxed>
            {this.renderResumes(this.state.resumes_2020, this.state.resumes_2021.length, "2020")}
          </Grid>

          <br></br>
          <br></br>

          {/* 2019 */}
          <div className="year_header" id="2019">
            <h4 className="classYear">2019</h4>
          </div>
          <Grid columns={5} relaxed>
            {this.renderResumes(this.state.resumes_2019, this.state.resumes_2021.length + this.state.resumes_2020.length, "2019")}
          </Grid>

          <br></br>
          <br></br>

          {/* alums */}
          <div className="year_header" id="alumni">
            <h4 className="classYear">ALUMNI</h4>
          </div>
          <Grid columns={5} relaxed>
            {this.renderResumes(this.state.resumes_alums, this.state.resumes_2019.length + this.state.resumes_2021.length + this.state.resumes_2020.length, "alumni")}
          </Grid>

          <br></br>
          <br></br>

          {/* professors */}
          <div className="year_header" id="faculty">
            <h4 className="classYear">FACULTY</h4>
          </div>
          <Grid columns={5} relaxed>
            {this.renderResumes(this.state.resumes_faculty, this.state.resumes_alums.length + this.state.resumes_2020.length + this.state.resumes_2019.length + this.state.resumes_2021.length, "faculty")}
          </Grid>

        </Segment>

      </div>
    );
  }

}

export default AllResumes;
