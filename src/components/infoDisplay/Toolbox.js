import React from 'react';
import './Toolbox.css';

function Toolbox() {
  return (
    <div className="container">
      <section>
        <h2>
          I like to learn and try new things. These are the tools I've been
          using until now:
        </h2>
        <ul className="container-icons">
          <Icon icon="javascript-plain" />
          <Icon icon="html5-plain" />
          <Icon icon="css3-plain" />
          <Icon icon="bootstrap-plain" />
          <Icon icon="react-original" />
          <Icon icon="npm-original-wordmark" />
          <Icon icon="github-original" />
        </ul>
        <h2>Always ready to improve and try new things!</h2>
      </section>
    </div>
  );
}

function Icon({ icon }) {
  return (
    <div className="icon">
      <i className={`devicon-${icon} colored`}></i>
      <p>{icon.split('-')[0].toUpperCase()}</p>
    </div>
  );
}

export default Toolbox;
