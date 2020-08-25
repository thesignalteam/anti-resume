import React, { Component } from "react";
import { Segment, Button } from 'semantic-ui-react';

function Footer() {
  const [emailData, setEmailData] = React.useState("");

  function handleChange(event) {
    setEmailData(event.target.value);
  }

  function subscribe() {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ email: emailData })
    };
    fetch('/api/subscribe-newsletter', requestOptions)
        .then(response => response.json())
  }

  return (<Segment basic id="footer-seg" vertical as="footer" textAlign="center">

  <div className="footer-content">
  <form class="">
    <label for="email"><h4>Join our newsletter:</h4></label><br />
    <div class="ui input">
    <input type="text" name="email" size="30" autocomplete="off" placeholder="hello@example.com"
    onChange={handleChange} value={emailData}/></div>
    <button type="submit" name="button" class="ui button" onClick={subscribe}>Subscribe</button>
  </form>


    <div className="footer-text">
      Made with ♡ in Philadelphia by  {" "}
      <a className="footer-p" href="https://thesign.al">
      The Signal. </a>

      </div>
      </div>


  </Segment>)

}

export default Footer;
