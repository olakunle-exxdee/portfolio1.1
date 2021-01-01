import React, { useRef, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiBootstrap } from "react-icons/si";
import "./About.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const aboutRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const element = aboutRef.current;
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
    tl.from(element.querySelector(".about-details").childNodes, {
      x: "0em",
      opacity: 0,
      stagger: 0.4,
    });
    console.log();
  });

  return (
    <section ref={aboutRef} id="skills-id" className="about-section">
      <div className="container">
        <div className="wrapper-about">
          <div className="heading">
            <h1 className="all-header">Take a look at my Skills.</h1>
            <p className="all-header-p">
              These are my skills and this contains all the technologies and
              programming languages that I have learnt until now. I am
              constantly learning, therefore I may update this section more
              often.
            </p>
          </div>
          <div className="about-details">
            <div className="items">
              <div className="icons">
                <FaHtml5 />
              </div>
              <div className="lang">
                <p>HTML</p>
              </div>
            </div>
            <div className="items">
              <div className="icons">
                <FaCss3Alt />
              </div>
              <div className="lang">
                <p>CSS</p>
              </div>
            </div>
            <div className="items">
              <div className="icons">
                <FaSass />
              </div>
              <div className="lang">
                <p>SCSS</p>
              </div>
            </div>
            <div className="items">
              <div className="icons">
                <FaReact />
              </div>
              <div className="lang">
                <p>React</p>
              </div>
            </div>
            <div className="items">
              <div className="icons">
                <FaGitAlt />
              </div>
              <div className="lang">
                <p>Git</p>
              </div>
            </div>
            <div className="items">
              <div className="icons">
                <SiJavascript />
              </div>
              <div className="lang">
                <p>Javascript</p>
              </div>
            </div>
            <div className="items">
              <div className="icons">
                <SiBootstrap />
              </div>
              <div className="lang">
                <p>Bootstrap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
