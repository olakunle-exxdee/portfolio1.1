import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaGitAlt,
  FaNode,
} from "react-icons/fa";
import { SiJavascript, SiBootstrap } from "react-icons/si";
import "./skills.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="wrapper-about">
          <div className="heading">
            <h1 className="all-header">Take a look at my Skillsets.</h1>
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
                <FaNode />
              </div>
              <div className="lang">
                <p>Node</p>
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

export default Skills;
