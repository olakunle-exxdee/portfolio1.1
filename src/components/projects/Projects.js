import React, { useState } from "react";
import datas from "./projectsData";
import "./Projects.scss";

const Projects = () => {
  const [data] = useState(datas);

  return (
    <section id="projects-id" className="project-section">
      <div className="container">
        <div className="heading">
          <h1 className="all-header">These are my Projects.</h1>
          <p className="all-header-p">
            These are some of the Fictional projects that I worked on. I have
            created some projects that help me understand more of the technology
            that I use.
          </p>
        </div>
        <div className="wrapper-projects">
          {data.map((item) => {
            const { id, title, paragraph, tech, live, git } = item;
            return (
              <div key={id} className="projects">
                <div className="project-img">
                  <img src={item.image} alt="img" />
                </div>
                <div className="project-details">
                  <h2 className="outline">{title}</h2>
                  <p>{paragraph}</p>
                </div>
                <div className="tech-used">
                  <p>{tech.one}</p>
                  <p>{tech.two}</p>
                  <p>{tech.three}</p>
                </div>
                <div className="project-btn">
                  <a href={live} target="_blank" rel="noreferrer">
                    <button className="live" type="button" href>
                      live website
                    </button>
                  </a>
                  <a href={git} target="_blank" rel="noreferrer">
                    <button className="github">github code</button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
