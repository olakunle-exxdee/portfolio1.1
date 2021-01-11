import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div id="app-id" className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/skills" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/footer" component={Footer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
