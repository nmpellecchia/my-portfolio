import { React, useState } from 'react';
import './Projects.css';

/* props with className "type" if it's text css will have different styling than mosaics grid */
/* projects and mosaics for techs, make them b&w. colors when hovered */
function GlassPanel(props) {
  /* const projects = [];
  for (let i = 0; i < props.projects.length - 1; i++) {
    projects.push(
      <ProjectSlide key={`project-${i}`} project={props.project[i]} />
    );
  } */
  return (
    <div className="container">
      {/* use props.children to pass children */}
      <section>
        {/* props.children */}
        {/* <ProjectSlide project={props.project}/> */}
        {props.projects.map((project, i) => {
          return (
            <ProjectSlide
              key={`project-${i.toString()}`}
              project={project}
              index={i}
            />
          );
        })}
      </section>
    </div>
  );
}

function ProjectSlide({
  project: { title, img, tools, desc, repo_url, live_url },
  index,
}) {
  return (
    <div className="project-slide" data-key={index}>
      <div className="project-media">
        <p className="project-title">{title}</p>
        <img src={img} alt={title} className="project-img" />
      </div>
      <div className="project-info">
        <p className="project-tools">{tools}</p>
        <p className="project-desc">{desc}</p>
      </div>
      <div className="project-buttons">
        <a href={repo_url}>View repository</a>
        <a href={live_url}>View repository</a>
        {/* Only render this btn if the project can be seen live */}
        {/* props.hasLive && <button>View live</button> */}
      </div>
    </div>
  );
}

export default GlassPanel;
