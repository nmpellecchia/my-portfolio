import React from 'react';
import './About.css';

function AboutMe() {
  return (
    <div className="container">
      <section id="about">
        <p className="about-txt">
          Hello, welcome to my portfolio! My name is Nicolas Pellecchia and I'm
          a web developer from Buenos Aires, Argentina.
        </p>
        <p className="big-txt">HIGHLY MOTIVATED ABOUT DESIGN AND PROGRAMMING</p>
        <p className="about-txt">
          I'm always in the mood to improve, learn new skills and bring to life
          useful and beautiful ideas.
        </p>
        <p className="big-txt">DEVOTED TO DRY & CLEAN CODE</p>
        <p className="about-txt">
          Want to talk with me? All my contact info is just below!
        </p>
        <svg
          className="arrow-down"
          /* width="100" */
          height="100"
          viewBox="0 0 100 60"
          preserveAspectRatio="none"
        >
          <path
            d="m 50 1 v 48 m -11 -11 l 11 11 l 11 -11"
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeWidth="5"
          />
        </svg>
      </section>
    </div>
  );
}

export default AboutMe;
