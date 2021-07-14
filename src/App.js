import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Skills from "./components/about/Skills";
import Project from "./components/projects/Projects";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div id="app-id" className="App">
      <BrowserRouter>
        <Nav />
        <Hero />
        <Skills />
        <Project />
      </BrowserRouter>
    </div>
  );
}

export default App;
