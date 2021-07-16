import { React, useState } from 'react';
import './Projects.css';

function Projects(props) {
  const [rangeVal, setRangeVal] = useState(0);

  return (
    <div className="container">
      {/* use props.children to pass children */}
      <section>
        <div className="swapper-sliders">
          <button
            className="swapper-slider swapper-previous-slide"
            disabled={rangeVal < 1}
            onClick={() => {
              setRangeVal(rangeVal - 1);
            }}
          >
            Previous
          </button>
          <button
            className="swapper-slider swapper-next-slide"
            disabled={rangeVal == props.projects.length - 1}
            onClick={() => {
              setRangeVal(rangeVal + 1);
            }}
          >
            Next
          </button>
          <p>{rangeVal}</p>
        </div>
        <ProjectSlide project={props.projects[rangeVal]} />
      </section>
    </div>
  );
}

function ProjectSlide({
  /* destructuring to avoid using props. ... */
  project: { title, img, tools, desc, repo_url, live_url },
}) {
  return (
    <li className="project-slide">
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
        {/* Only render this btn if the project can be seen live */}
        live_url && <a href={live_url}>View repository</a>
      </div>
    </li>
  );
}

export default Projects;
