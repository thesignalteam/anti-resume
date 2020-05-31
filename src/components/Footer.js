import React from "react";
import { Segment} from 'semantic-ui-react';


function Footer() {
  return <Segment basic id="footer-seg" vertical as="footer" textAlign="center">
    <div className="footer-text">
      Made with ♡ in Philadelphia by  {" "}
      <a className="footer-p" href="https://thesign.al">
      The Signal </a>
      .
      </div>


  </Segment>
}

export default Footer;
