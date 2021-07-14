import { React, useState } from 'react';
import './Projects.css';

/* props with className "type" if it's text css will have different styling than mosaics grid */
/* projects and mosaics for techs, make them b&w. colors when hovered */
function GlassPanel(props) {
  return (
    <div className="container">
      {/* use props.children to pass children */}
      <section className={` ${props.type}`}>
        {/* props.children */}
        <ProjectSlide />
      </section>
    </div>
  );
}

function ProjectSlide(props) {
  return (
    <div className="project-slide">
      <div className="project-media">
        <p className="project-title">Title</p>
        <img src="#" alt="#" className="project-img" />
      </div>
      <div className="project-info">
        <p className="project-tools">js,html,css</p>
        <p className="project-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti est
          minima ipsa, quos non voluptates laudantium.
        </p>
      </div>
      <div className="project-buttons">
        <button>View repository</button>
        <button>View repository</button>
        {/* Only render this btn if the project can be seen live */}
        {/* props.hasLive && <button>View live</button> */}
      </div>
    </div>
  );
}

export default GlassPanel;
