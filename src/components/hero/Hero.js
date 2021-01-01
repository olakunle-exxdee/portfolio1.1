import React, { useRef, useEffect } from "react";
import "./Hero.scss";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      stagger: 0.2,
      duration: 0.4,
      ease: "power1",
      autoAlpha: 0,
    });
    const element = heroRef.current;

    tl.from(element.querySelector(".hero-title"), {
      x: "-100em",
    });
    tl.from(element.querySelector(".main-header"), {
      x: "-80em",
    });
    tl.from(element.getElementsByTagName("p"), {
      x: "-60em",
    });
    tl.from(element.querySelector(".resume-container"), {
      x: "-50em",
    });
  });
  return (
    <section id="hero-id" className="hero">
      <div className="container">
        <div ref={heroRef} className="wrapper">
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
            <a href="#">
              <button className="resume"> resume</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
