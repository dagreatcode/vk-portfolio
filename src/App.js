import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./containers/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="Portfolio">Portfolio</Link>
      </div>
      <div>
        <Link to="Contact">Contact</Link>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
