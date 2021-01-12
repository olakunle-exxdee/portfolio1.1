import "./Hero.scss";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero-id" className="hero">
      <div className="container">
        <div className="wrapper">
          <h3 className="hero-title">Hi👋, I'm Saheed Olakunle</h3>
          <h1 className="main-header">
            I Build Functional Websites & Develop Better Web App.
          </h1>
          <p>
            I'm a Front-end/Web developer with foundation in computer science
            from Lagos,<span>Nigeria</span>. I'm passionate about web design,
            web development, clean and readable code which can be used by me and
            others to create software.
          </p>
          <div className="resume-container">
            <a href="twiiter.com" target="_blank" rel="noreferrer">
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
