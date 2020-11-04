import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./containers/Home/Home";
import Portfolio from "./containers/Portfolio/Portfolio";
import Contact from "./containers/Contact/Contact";
import Navbar from "./containers/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/> 
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/vk-portfolio" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
