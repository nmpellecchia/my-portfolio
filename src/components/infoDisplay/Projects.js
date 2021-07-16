import { React, useState } from 'react';
import './Projects.css';

/* props with className "type" if it's text css will have different styling than mosaics grid */
/* projects and mosaics for techs, make them b&w. colors when hovered */
function GlassPanel(props) {
  const [rangeVal, setRangeVal] = useState(0);

  return (
    <div className="container">
      {/* use props.children to pass children */}
      <section>
        {/* props.children */}
        {/* I don't like input range behaviour, So I'll change it   */}
        {/* <input
          className="swapper-slider"
          type="range"
          min="-1"
          max={props.projects.length}
          step="1"
          role="slider"
          defaultValue="0"
          title="See Projects"
          onChange={handleChange}
        /> */}
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
        <ProjectSlide project={props.projects[rangeVal]} index="2" />

        {/* <ul className="projects swapper-items">
        {props.projects.map((project, i) => {
          return (
            <ProjectSlide
              key={`project-${i.toString()}`}
              project={project}
              index={i}
            />
          );
        })}
        </ul> */}
      </section>
    </div>
  );
}

function ProjectSlide({
  /* destructuring to avoid using props. ... */
  project: { title, img, tools, desc, repo_url, live_url },
  index,
}) {
  return (
    <li className="project-slide" data-key={index}>
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
    </li>
  );
}

export default GlassPanel;
