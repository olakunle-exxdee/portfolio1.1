import "./App.scss";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div id="app-id" className="App">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
