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
  project: { title, img, tools, desc, repoURL, liveURL },
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
        <a href={repoURL}>View repository</a>
        {/* Only render this btn if the project can be seen live */}
        {liveURL && <a href={liveURL}>View Live</a>}
      </div>
    </li>
  );
}

export default Projects;
