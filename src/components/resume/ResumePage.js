import React, { Component } from "react";
import { Card, Icon, Button, Image, Divider, Segment, Header, Grid} from 'semantic-ui-react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LinkIcon from '@material-ui/icons/Link';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { render } from "@testing-library/react";


class ResumePage extends Component {

  constructor(props, { match }) {
    super();
    this.state = {
      resumes_2020: [],
      response: '',
      responseToPost: '',
      resumeClass: props.match.params.class,
      resumeId: props.match.params.resumeId,
      last: false,
    }
  }

  componentDidMount = () => {
    fetch('/api/getAllResumes/senior/2020')
    .then(res => res.json())
    .then(
      (result) => {
        console.log("type of result " + typeof(result))
        console.log(result);  
        this.setState({
          resumes_2020: result
        });
      },
     
      (error) => {
        console.log("error is " + error);
      }
    )
  }

  getCurrentResume2020 = (resumes) => {
    resumes = this.state.resumes_2020
    let resumeId = this.state.resumeId
    let gridValues = []

    if (Array.isArray(resumes)) {
      resumes.forEach((i, index) => {
        if (index == resumeId) {
            gridValues.push(this.renderResumePage(i, index))
        } else {
            return (<p>index not found</p>)
        }
      })
    } else if (resumes.length == 1) {
        gridValues.push(this.renderResumePage(resumes, 0))
    } else {
        return (<p>page not found</p>)
    }

    return gridValues

  }

  // bright side

  renderBrightSide = (resume) => {
    return (
      <Segment className="section">
      <div class="ui medium header category-head">On the Bright Side</div>

        <Grid columns={2} relaxed>
          
          { this.renderCategoryList(resume.memoriesImade, "Memories I Made", false) }
          { this.renderCategoryList(resume.thingsLearnt, "Things I Learned", false) }
          { this.renderCategoryList(resume.booksForFun, "Books I Read For Fun", false) }
          { this.renderCategoryList(resume.thingsProudOf, "Things I'm Proud Of", false) }
          { this.renderCategoryList(resume.unconventionalSkills, "Unconventional Skills", false) }
          { this.renderCategoryList(resume.quirks, "Quirks I have", false) }
          { this.renderCategoryList(resume.comfortZone, "Times I Stepped Out of my Comfort Zone", false) }
          { this.renderCategoryList(resume.leapsOfFaith, "Leaps of Faith", false) }
          { this.renderCategoryList(resume.obstacles, "Obstacles I Overcame", false) }
          { this.renderCategoryList(resume.thingsProudOf, "Big Life Events", false) }
          { this.renderCategoryList(resume.other, "Other Things I Appreciated", true) }

        </Grid>
      </Segment>
    )
  }

  // l's taken

  renderLsTaken = (resume) => {
    return (
      <Segment className="section middle">

        <div class="ui medium header category-head">L's Taken</div>

          <Grid columns={2} relaxed>

            { this.renderCategoryList(resume.companiesRejectedFrom, 'Thank you for applying but..." Jobs', false) }
            { this.renderCategoryList(resume.clubsRejectedFrom, "Clubs that Weren't a Good Fit", false) }
            { this.renderCategoryList(resume.thingsIsworeIdFinish, "Things I Swore I'd Finish", false) }
            { this.renderCategoryList(resume.everydayLs, "Everyday L's", false) }
            { this.renderCategoryList(resume.thingsProudOf, "Failure That Seemed Like the End of the World Back Then But Doesn't Matter in Hindsight", true) }

          </Grid>

      </Segment>
    )
  }

  renderCategoryList = (list, name, last) => {
    if (list) {
      if (list.length > 1) {
        return (
          <Grid.Row class="row">
            <Grid.Column width={2} >
              <Header className="number" color="blue">{ list.length }</Header>
            </Grid.Column>
            <Grid.Column width={10} textAlign="left">
              { this.renderName(name) }
                <ul>
                  { this.renderList(list) }
                </ul>
            </Grid.Column>
            { this.renderDivider(last) }
          </Grid.Row>
        )
      }
    } else {
      return
    }
  }

  renderDivider = (last) => {
    if (last) {
      return
    } else {
      return (
        <hr className="divider"/>
      )
    }
  }

  renderName = (name) => {
    return (
      <Header className="category" as="h4" color="blue">{ name }</Header>
    )
  }

  renderList = (list) => {

    let gridValues = []
    if (Array.isArray(list)) {
      list.forEach((i, index) => {
        gridValues.push(this.renderListItem(i, index))
      })
    } else if (list.length == 1) {
        gridValues.push(this.renderListItem((list), 0))
    }

    return gridValues
  }

  renderListItem = (item) => {
    return (
      <li className="bullet">
        <p className="content">{ item }</p>
      </li>
    )
  }

  renderResumePage = (resume, key) => {
    return (
      <div className="App" id="resume" key={ key }>

      <Segment className="section top">
        <img className="background" src="../background.jpg" alt="background"/>

        <img className="icon" src={ resume.profilePicUrl }/>
        <Header className="name"as="h3">{ resume.name }</Header>
        <p className="year">{ resume.class }</p>
        <p class="description">{ resume.shortBio }</p>
        <div className="icons">
        <LinkIcon className="resume-icons"/>
        <LinkedInIcon className="resume-icons"/>
        <MailOutlineIcon className="resume-icons"/>
        </div>
      </Segment>

      { this.renderLsTaken(resume) }
      { this.renderBrightSide(resume) }

      </div>
    );
  }

  render() {
    return (
      <div>
        { this.getCurrentResume2020() }
      </div>
    );
  }
  
}


export default ResumePage;
