import React from "react";
import { Card, Icon, Button, Image, Divider, Segment, Header, Grid} from 'semantic-ui-react';


function About() {
  return <div className="App" id="about">

    <Segment className="top-segment segment">
    <h1>Anti-Resume Project Features</h1>
    <p>Learn more about our project: </p>
<a href="https://www.thedp.com/article/2019/03/penn-anti-resume-ocr-recruiting-failure-signal">DP Article: "Students create 'anti-resumes' to normalize Failure at Penn"</a><br/>
    <a href="https://www.artoffailurepodcast.com/episodes-blog/failureresume">Art of Failure Podcast</a>

    </Segment>
    <Segment className="segment">
    <h1>Contact Us</h1>
    <p>We'd love to hear from you. If you have thoughts or questions about this project, please reach out to us
    by emailing Rajvi at EMAIL, Carol at EMAIL, or Olivia at oodwyer@seas.upenn.edu.
    <br/><br/>
    We hope to reopen with a form to submit your anti-resume soon!</p>
    </Segment>
  </div>
}

export default About;
