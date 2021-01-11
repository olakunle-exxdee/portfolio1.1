import "./Hero.scss";

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
    </section>
  );
};

export default Hero;
