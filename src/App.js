import "./App.scss";
import Nav from "./components/nav/Nav";
import Skills from "./components/skills/Skills";
import Project from "./components/projects/Projects";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
// import About from "./components/about/About";

function App() {
  return (
    <div id="app-id" className="App">
      <Nav />
      <Hero />
      <Project />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
