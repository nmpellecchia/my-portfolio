import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="container full-width">
      {/* <h1 className="big-title">Contact</h1> */}
      <footer>
        <div className="contacts-outer">
          <h2 className="contact-txt">
            Want to talk or work with me?
            <a href="mailto:nicolasmpellecchia@gmail.com">Send me an email</a>
            or a message on these online spaces!
          </h2>
          <ul className="contact-socials">
            <li>
              <a href="" rel="external">
                <i className="devicon-codepen-plain"></i>
              </a>
            </li>
            <li>
              <a href="" rel="external">
                <i className="devicon-github-original"></i>
              </a>
            </li>
            <li>
              <a href="" rel="external">
                <i className="devicon-linkedin-plain"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
