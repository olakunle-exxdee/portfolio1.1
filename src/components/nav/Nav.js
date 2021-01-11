import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div id="nav-id" className="container">
      <nav className="navbar">
        <div className="navbar__one">
          <Link to="/">
            <h1 className="logo">Olakunle.</h1>
          </Link>

          <div className="hamburger">
            <button
              className="openclose"
              onClick={() => setShowLinks(!showLinks)}
            >
              {showLinks ? (
                <CgClose className="fas" />
              ) : (
                <GoThreeBars className="fas" />
              )}
            </button>
          </div>
        </div>

        <div className={`${showLinks ? "navbar__two open" : "navbar__two "}`}>
          <ul className="links">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/skills">
              <li>Skills</li>
            </Link>
            <Link to="/projects">
              <li>Projects</li>
            </Link>
            <Link to="/footer">
              <li>Contacts</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
