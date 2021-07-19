import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="container full-width">
      {/* <h1 className="big-title">Contact</h1> */}
      <footer>
        <div className="contacts-outer">
          <h2 className="contact-txt">
            Want to talk or work with me? -Send me an email- or a message on
            these online spaces!
          </h2>
          <ul className="contact-socials">
            <li>github</li>
            <li>codepen</li>
            <li>linkedin</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
