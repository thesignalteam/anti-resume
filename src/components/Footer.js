import React from "react";
import { Segment } from 'semantic-ui-react';
import Mailchimp from 'react-mailchimp-form'


function Footer() {
  return <Segment basic id="footer-seg" vertical as="footer" textAlign="center">

    <div>
      <label>Subscribe to The Signal Newsletter</label>
      <Mailchimp
        action='https://thesign.us17.list-manage.com/subscribe/post?u=d7a30c2ea9fa85aec745a017c&amp;id=31fef8a31a'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}
      />
    </div>


    <div className="footer-text">
      Made with ♡ in Philadelphia by  {" "}
      <a className="footer-p" href="https://thesign.al">
        The Signal. </a>
    </div>


  </Segment>
}

export default Footer;