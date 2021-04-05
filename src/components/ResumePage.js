import React, { Component } from "react";
import { Segment, Header, Grid } from 'semantic-ui-react';
import LinkIcon from '@material-ui/icons/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';




class ResumePage extends Component {

  constructor(props, { match }) {
    super();
    this.state = {
      resumes_2021: [],
      resumes_2020: [],
      resumes_2019: [],
      resumes_alums: [],
      resumes_faculty: [],
      response: '',
      responseToPost: '',
      resumeClass: props.match.params.class,
      resumeId: props.match.params.resumeId,
      last: false,
    }
  }

  componentDidMount = () => {
    fetch('/api/getAllResumes/senior/2021')
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
            resumes_2019: result,
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

  getCurrentResume = (resumes) => {
    resumes = this.state.resumes_2021.concat(this.state.resumes_2020).concat(this.state.resumes_2019).concat(this.state.resumes_alums).concat(this.state.resumes_faculty)
    let resumeId = this.state.resumeId
    let resumeClass = this.state.resumeClass
    let gridValues = []
    if (Array.isArray(resumes)) {
      console.log("resumeClass " + resumeClass);
      resumes.forEach((i, index) => {
        let resumeJson = JSON.parse(JSON.stringify(i))
        let classT = resumeJson.class ? resumeJson.class : resumeJson.department
        if (index == resumeId && classT == resumeClass) {
          console.log("index == resume Id is " + resumeId);
          // console.log("resumes.length " + resumes.length)
          console.log(JSON.stringify(i));
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
          {this.renderCategoryList(resume.memoriesImade, "Memories I Made When I Wasn't Studying / Working:", false)}
          {this.renderCategoryList(resume.thingsLearnt, "Things I've Learned That Will Still Matter in 10 Years", false)}
          {this.renderCategoryList(resume.booksForFun, "Books I've Read For Fun", false)}
          {this.renderCategoryList(resume.thingsProudOf, "Things I'm Proud of That You Won't See on a Resume", false)}
          {this.renderCategoryList(resume.unconventionalSkills, "Unconventional Skills", false)}
          {this.renderCategoryList(resume.quirks, "Quirks That Make Me Who I Am", false)}
          {this.renderCategoryList(resume.comfortZone, "Things I've Done That Pushed Me Out of My Comfort Zone", false)}
          {this.renderCategoryList(resume.endOfTheWorld, "Failures That Seemed Like the End of the World Back Then But Don't Matter in Hindsight", false)}
          {this.renderCategoryList(resume.leapsOfFaith, "Leaps of Faith", false)}
          {this.renderCategoryList(resume.obstacles, "Obstacles I Have Overcome", false)}
          {this.renderCategoryList(resume.lifeEvents, "Life Events That Have Made Me Stronger", false)}
          {this.renderCategoryList(resume.other, "Other Things I Appreciated", true)}
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
          {this.renderCategoryList(resume.companiesRejectedFrom, '"Thank you for applying but..." Jobs', false)}
          {this.renderCategoryList(resume.clubsRejectedFrom, "Clubs that Weren't a Good Fit", false)}
          {this.renderCategoryList(resume.thingIsworeIdFinish, "Things I Swore I'd Finish But Never Did", false)}
          {this.renderCategoryList(resume.everydayLs, "Everyday L's", false)}
          {this.renderCategoryList(resume.regretsIHave, "Regrets I Have", true)}
        </Grid>
      </Segment>
    )
  }

  renderCategoryList = (list, name, last) => {
    if (list) {
      if (list.length >= 1) {
        return (
          <Grid.Row class="row">
            <Grid.Column width={2} >
              <Header className="number" color="blue">{list.length}</Header>
            </Grid.Column>
            <Grid.Column width={10} textAlign="left">
              {this.renderName(name)}
              <ul>
                {this.renderList(list)}
              </ul>
            </Grid.Column>
            {this.renderDivider(last)}
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
        <hr className="divider" />
      )
    }
  }

  renderName = (name) => {
    return (
      <Header className="category" as="h4" color="blue">{name}</Header>
    )
  }

  renderList = (list) => {

    let gridValues = []
    if (Array.isArray(list)) {
      list.forEach((i, index) => {
        if (i !== "") {
          gridValues.push(this.renderListItem(i, index))
        }
      })
    } else if (list.length == 1) {
      gridValues.push(this.renderListItem((list), 0))
    }

    return gridValues
  }

  renderListItem = (item) => {
    return (
      <li className="bullet">
        <p className="content">{item}</p>
      </li>
    )
  }

  renderResumePage = (resume, key) => {
    // console.log("current Resume is  " + JSON.stringify(resume));
    let email = resume.email
    if (resume.name === "Anonymous") {
      email = ""
    }

    let propic = '../../tower.png'
    let style = 'default-icon'
    if (resume.profilePicUrl) {
      propic = resume.profilePicUrl;
      style = 'icon';
    }

    return (
      <div className="App" id="resume" key={key}>
        <Segment className="section top">
          <img className="background" src="../../background.jpg" alt="background" />
          <img className={style} src={propic} />
          <Header className="name" as="h3">{resume.name}</Header>
          <p className="year">{resume.class}</p>
          <p class="description">{resume.shortBio}</p>
          <div className="icons">
            {resume.personalWebsite && <LinkIcon className="resume-icons" href={resume.personalWebsite}/>}
            {resume.linkedIn && <LinkedInIcon className="resume-icons" href={resume.linkedin}/>}
            {resume.publicEmail && <MailOutlineIcon className="resume-icons" href={resume.publicEmail} />}
          </div>
        </Segment>

        {this.renderLsTaken(resume)}
        {this.renderBrightSide(resume)}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.getCurrentResume()}
      </div>
    );
  }

}


export default ResumePage;
