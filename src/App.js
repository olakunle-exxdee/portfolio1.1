import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Skills from "./components/skills/Skills";
import Project from "./components/projects/Projects";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";

function App() {
  return (
    <div id="app-id" className="App">
      <BrowserRouter>
        <Nav />
        <Hero />
        <About />
        <Project />
        <Skills />
      </BrowserRouter>
    </div>
  );
}

export default App;
