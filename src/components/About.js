import React from "react";
import { Segment, Grid} from 'semantic-ui-react';
import 'pure-react-carousel/dist/react-carousel.es.css';


function About() {
  return <div className="App" id="about">

  <h1>About The Anti-Resume Project</h1>

    <Segment className="top-segment segment">
      <h2>Learn More</h2>
      <h3>Failures at Penn Video</h3>

      <p align="center">
        <iframe className="video-screen"  style={{border:"none", overflow:"hidden", position: "center"}} scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fjointhesignal%2Fvideos%2F2073803059583829%2F&show_text=0&width=560" ></iframe>
      </p>

      <p>In Spring 2019, we interviewed a dozen graduating seniors on their failures at Penn.</p>

      <h3>Daily Pennsylvanian Article </h3>
      <p>In 2019, the Daily Pennsylvanian wrote an article, <a  href="https://www.thedp.com/article/2019/03/penn-anti-resume-ocr-recruiting-failure-signal">"Students create 'anti-resumes' to normalize Failure at Penn"</a>, to showcase our project.</p>
      <h3>Podcast</h3>
      <p style={{paddingBottom: 20}}>In 2019, The Art of Failure <a href="https://www.artoffailurepodcast.com/episodes-blog/failureresume">interviewed Olivia and Sophia about the project</a> in their podcast.</p>
    </Segment>

    <Segment className="segment">
      <h2>Anti-Resume Project at Other Schools</h2>
      <p><a href="https://www.dukeantiresume.org/?fbclid=IwAR25NjZBysg6bdsPmfq_QYCiwDU0OnTVdWXbKh7N8ebP6JmI0NT2vge1dDI" target="blank">Duke University</a></p>
      <p><a href="https://unite25.wixsite.com/unite/journey?fbclid=IwAR36DYvd_rkqcgStWKQ695qaxKOcQ3fbAaNxJm1NvlFwPqnGXd0wxiYteE8" target="blank">Illinois Institute of Technology</a></p>
      <h3>Coming Soon To...</h3>
      <p>Harvard</p>
      <p>University of Toronto</p>
      <br></br>
      <p>If you're interested in bringing the anti-resume project to your school, we'd love to help! Send us a message on our Facebook page below.</p>

     
    </Segment>


    
    <Segment className="segment">
      <h2>Contact Us</h2>
      <h3>We'd love to hear from you!</h3>
      <p>
      If you have thoughts or questions about this project, please reach out!
      </p>

      <Grid columns={2} relaxed>
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <div className="box first-box">
            <h4>DEVELOPING</h4>
            <ul>
              <li><i class="far fa-envelope"></i> &nbsp; <a href="mailto:rgemawat@seas.upenn.edu">Rajvi Gemawat</a></li>
              <li><i class="far fa-envelope"></i> &nbsp; <a href="mailto:oodwyer@seas.upenn.edu">Olivia O'Dwyer</a></li>
              <li><i class="far fa-envelope"></i> &nbsp; <a href="mailto:hkwang@wharton.upenn.edu">Hannah Wang</a></li>
            </ul>
          </div>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <div className="box">
            <h4>MARKETING & DESIGN</h4>
            <ul>
              <li><i class="far fa-envelope"></i> &nbsp; <a href="mailto:LKaf@seas.upenn.edu">Lauren Kafkaloff</a></li>
              <li><i class="far fa-envelope"></i> &nbsp; <a href="mailto:soshen@wharton.upenn.edu">Sophie Shen</a></li>
              <li><i class="far fa-envelope"></i> &nbsp; <a href="mailto:annawang@seas.upenn.edu">Anna Wang</a></li>

            </ul>
          </div>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <div className="box">
            <h4>PREVIOUS MEMBERS</h4>
            <ul>
            <li>Sophia Ye '20</li>
              <li>Melinda Hu '20</li>
              <li>Carol Li '22</li>
              <li>Kaitlyn Rentala '22</li>
              <li>Jess Tan '22</li>
            </ul>
          </div>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <div className="box">
            <h4>THE SIGNAL @ PENN</h4>
            <ul>
            <li><i class="fas fa-home"></i> &nbsp; <a href="https://thesign.al/">The Signal</a></li>
              <li><i class="fab fa-facebook-square"></i> &nbsp; <a href="https://www.facebook.com/jointhesignal/">@The Signal</a></li>
              <li><i class="fab fa-instagram"></i> &nbsp; <a href="https://www.instagram.com/signal.penn/">@signal.penn</a></li>
              <li><i class="far fa-envelope"></i> &nbsp; <a href="mailto:thesignalwriters@gmail.com">The Signal</a></li>
            </ul>
          </div>
        </Grid.Column>
      </Grid>

      {/* <div className="box">
        <h4>DEVELOPING</h4>
        <ul>
          <li><i class="far fa-envelope"></i> &nbsp; <a href="mailto:rgemawat@seas.upenn.edu">Rajvi Gemawat</a></li>
          <li><i class="far fa-envelope"></i> &nbsp; <a href="mailto:oodwyer@seas.upenn.edu">Olivia O'Dwyer</a></li>
          <li><i class="far fa-envelope"></i> &nbsp; <a href="mailto:caroldotli@gmail.com">Carol Li</a></li>
        </ul>
      </div>

      <div className="box">
        <h4>MARKETING & DESIGN</h4>
        <ul>
          <li><i class="far fa-envelope"></i> &nbsp; <a href="mailto:">Melinda Hu</a></li>
          <li><i class="far fa-envelope"></i> &nbsp; <a href="mailto:">Jessica Tan</a></li>
        </ul>
      </div>

      <div className="box">
        <h4>THE SIGNAL @ PENN</h4>
        <ul>
          <li><i class="fab fa-facebook-square"></i> &nbsp; <a href="mailto:rgemawat@seas.upenn.edu">@The Signal</a></li>
          <li><i class="fab fa-instagram"></i> &nbsp; <a href="https://www.instagram.com/signal.penn/">@signal.penn</a></li>
          <li><i class="far fa-envelope"></i> &nbsp; <a href="mailto:thesignalwriters@gmail.com">The Signal</a></li>
        </ul>
      </div> */}

      {/* <p style={{paddingBottom: 20}}>
        We hope to re-open a form for anti-resumes soon.
      </p> */}

    </Segment>
  </div>
}

export default About;
