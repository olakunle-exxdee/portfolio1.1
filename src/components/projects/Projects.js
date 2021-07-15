import "./Projects.scss";
import data from "../../data";

const Projects = () => {
  return (
    <section id="projects" className="project-section">
      <div className="container">
        <div className="heading">
          <h1 className="all-header">Some of my Projects.</h1>
          <p className="all-header-p">
            These are some of the projects that I worked on. I have created some
            projects that help me understand more of the technology that I use.
          </p>
        </div>
        <div className="wrapper-projects">
          {data.map((item) => {
            const { id, title, paragraph, live } = item;
            return (
              <div key={id} className="projects">
                <div className="project-img">
                  <img src={item.image} alt="img" />
                </div>
                <div className="project-details">
                  <h2>{title}</h2>
                  <p>{paragraph}</p>
                </div>

                <div className="project-btn">
                  <a href={live} target="_blank" rel="noreferrer">
                    live
                  </a>
                  <a href={live} target="_blank" rel="noreferrer">
                    git
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
