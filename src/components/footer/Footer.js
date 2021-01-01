import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
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
  );
};

export default Footer;
