import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/about/About";
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
          <Route path="/skills" exact component={About} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
