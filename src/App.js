import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

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
      <h1>Hello World</h1> 
      </Router>
    </div>
  );
}

export default App;
