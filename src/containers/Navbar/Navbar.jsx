import React from 'react';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "../../containers/Home/Home";
import Portfolio from "../../containers/Portfolio/Portfolio";
import Contact from "../../containers/Contact/Contact";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Vincent Kendrick Portfolio</a>
                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                <Router>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>     */}
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Link</a> */}
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Link</a> */}
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
                </Router>
                {/* </div> */}
            </nav>
        </div>
    );
};

export default Navbar;