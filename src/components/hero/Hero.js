import "./Hero.scss";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Redirect } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero-id" className="hero">
      <div className="container">
        <div className="wrapper">
          <h3 className="hero-title">Hi👋, I'm Saheed Olakunle</h3>
          <h1 className="main-header">
            I Build Functional Websites & Develop Better Web App.
          </h1>
          <p className="hello">
            I'm a Front-end Engineer with a vast engineering foundation in
            computer science from Lagos. I’m passionate about designing around
            the web, writing clean and readable code that helps to solve
            real-world problems. I'm also a lifelong learner.
          </p>
          <div className="resume-container">
            <a
              href="https://drive.google.com/file/d/1QJJIxxRU2Htb8ZDoT8Z5l8ItI9bDPZP_/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="resume"> resume</button>
            </a>
          </div>
        </div>
      </div>
      <footer className="footer" id="footer">
        <div className="footer-wrapper">
          <div className="links">
            <a
              href="https://twitter.com/olakunle_exxdee"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="footer-links" />
            </a>
            <a
              href="https://www.linkedin.com/in/saheed-olakunle-ogunsolu-2a5578198/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="footer-links" />
            </a>
            <a
              href="https://github.com/olakunle-exxdee"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="footer-links" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Hero;
