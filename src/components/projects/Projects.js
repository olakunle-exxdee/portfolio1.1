import React, { useRef, useEffect, useState } from "react";
import datas from "./projectsData";
import "./Projects.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  const [data, setData] = useState(datas);
  const procjectRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const element = procjectRef.current;
    const tl = gsap.timeline({
      stagger: 0.2,
      duration: 0.4,
      ease: "linear",
      autoAlpha: 0,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 100%",
      },
    });

    tl.from(element.querySelector(".all-header"), {
      x: "-100em",
    });
    tl.from(element.querySelector(".all-header-p"), {
      x: "100em",
    });
    tl.from(element.querySelector(".wrapper-projects").childNodes, {
      opacity: 0,
      stagger: 0.4,
    });
  });

  return (
    <section ref={procjectRef} id="projects-id" className="project-section">
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
