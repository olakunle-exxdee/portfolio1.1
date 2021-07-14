import React, { useEffect, useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import { Link as LinkScroll } from "react-scroll";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-one">
          <Link to="/">
            <h1 className="logo">OLAKUNLE</h1>
          </Link>

          <div className={`${showLinks ? "open-icon" : ""}`}>
            <Hamburger size={24} toggled={showLinks} toggle={setShowLinks} />
          </div>
        </div>

        <div className={`${showLinks ? "navbar-two open" : "navbar-two"}`}>
          <ul className="links">
            <li>
              <LinkScroll
                onClick={() => setShowLinks(false)}
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={300}
                onSetActive={() => {
                  setActiveLink("home");
                }}
                className="link-list"
              >
                home
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                onClick={() => setShowLinks(false)}
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={300}
                onSetActive={() => {
                  setActiveLink("about");
                }}
                className="link-list"
              >
                about
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                onClick={() => setShowLinks(false)}
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                duration={300}
                onSetActive={() => {
                  setActiveLink("skills");
                }}
                className="link-list"
              >
                Skills
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                onClick={() => setShowLinks(false)}
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={300}
                onSetActive={() => {
                  setActiveLink("projects");
                }}
                className="link-list"
              >
                Projects
              </LinkScroll>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
